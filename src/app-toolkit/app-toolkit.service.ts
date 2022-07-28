import { CACHE_MANAGER, forwardRef, Inject, Injectable } from '@nestjs/common';
import { BigNumber as BigNumberJS } from 'bignumber.js';
import { Cache } from 'cache-manager';
import { ethers } from 'ethers';

import { AppService } from '~app/app.service';
import { ContractFactory } from '~contract';
import { MulticallService } from '~multicall/multicall.service';
import { NetworkProviderService } from '~network-provider/network-provider.service';
import { DefaultDataProps } from '~position/display.interface';
import { PositionKeyService } from '~position/position-key.service';
import { AppTokenPosition, ContractPosition, NonFungibleToken } from '~position/position.interface';
import { AppGroupsDefinition, PositionService } from '~position/position.service';
import { BaseToken } from '~position/token.interface';
import { PriceSelectorService } from '~token/price-selector.service';
import { Filters } from '~token/token-price-selector.interface';
import { TokenService } from '~token/token.service';
import { Network } from '~types/network.interface';

import { AppToolkitHelperRegistry } from './app-toolkit.helpers';
import { IAppToolkit } from './app-toolkit.interface';

@Injectable()
export class AppToolkit implements IAppToolkit {
  private readonly contractFactory: ContractFactory;
  constructor(
    // We need the forward ref here, since there is a circular dependency on the AppToolkit, since each helper needs the toolkit
    @Inject(forwardRef(() => AppToolkitHelperRegistry)) private readonly helperRegistry: AppToolkitHelperRegistry,
    @Inject(AppService) private readonly appService: AppService,
    @Inject(NetworkProviderService) private readonly networkProviderService: NetworkProviderService,
    @Inject(PositionService) private readonly positionService: PositionService,
    @Inject(PositionKeyService) private readonly positionKeyService: PositionKeyService,
    @Inject(TokenService) private readonly tokenService: TokenService,
    @Inject(PriceSelectorService) private readonly priceSelectorService: PriceSelectorService,
    @Inject(MulticallService) private readonly multicallService: MulticallService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.contractFactory = new ContractFactory((network: Network) => this.networkProviderService.getProvider(network));
  }

  // Apps

  async getApps() {
    return this.appService.getApps();
  }

  async getApp(appId: string) {
    return this.appService.getApp(appId);
  }

  // Network Related

  get globalContracts() {
    return this.contractFactory;
  }

  getNetworkProvider(network: Network) {
    return this.networkProviderService.getProvider(network);
  }

  getMulticall(network: Network) {
    return this.multicallService.getMulticall(network);
  }

  // Base Tokens

  getBaseTokenPrices(network: Network) {
    return this.priceSelectorService.create().getAll({ network });
  }

  getBaseTokenPrice(opts: { network: Network; address: string }) {
    return this.priceSelectorService.create().getOne(opts);
  }

  getBaseTokenPriceSelector(filters: Filters = {}) {
    return this.priceSelectorService.create(filters);
  }

  // Positions

  getAppTokenPositions<T = DefaultDataProps>(...appTokenDefinitions: AppGroupsDefinition[]) {
    return this.positionService.getAppTokenPositions<T>(...appTokenDefinitions);
  }

  getAppContractPositions<T = DefaultDataProps>(...appTokenDefinitions: AppGroupsDefinition[]) {
    return this.positionService.getAppContractPositions<T>(...appTokenDefinitions);
  }

  // Position Key

  getPositionKey(
    position: ContractPosition | AppTokenPosition | BaseToken | NonFungibleToken,
    pickFields: string[] = [],
  ) {
    return this.positionKeyService.getPositionKey(position, pickFields);
  }

  // Cache

  async getFromCache<T = any>(key: string) {
    // In production, this is a Redis `get`
    return this.cacheManager.get<T>(key);
  }

  async msetToCache<T = any>(entries: [string, T][]) {
    // In production, this is a Redis `mset`
    await Promise.all(entries.map(([key, value]) => this.cacheManager.set(key, value)));
  }

  // Global Helpers

  get helpers() {
    return this.helperRegistry;
  }

  getBigNumber(source: BigNumberJS.Value | ethers.BigNumber): BigNumberJS {
    if (source instanceof ethers.BigNumber) return new BigNumberJS(source.toString());
    return new BigNumberJS(source);
  }
}
