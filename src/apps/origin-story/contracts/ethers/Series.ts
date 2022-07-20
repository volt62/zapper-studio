/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface SeriesInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment;
    'bootstrapSeason(uint256,uint256)': FunctionFragment;
    'claim()': FunctionFragment;
    'claimGovernance()': FunctionFragment;
    'currentClaimingIndex()': FunctionFragment;
    'currentStakingIndex()': FunctionFragment;
    'expectedClaimingSeason()': FunctionFragment;
    'expectedStakingSeason()': FunctionFragment;
    'governor()': FunctionFragment;
    'initialize(address,address)': FunctionFragment;
    'isGovernor()': FunctionFragment;
    'latestStakeTime(address)': FunctionFragment;
    'liveSeason()': FunctionFragment;
    'ogn()': FunctionFragment;
    'popSeason()': FunctionFragment;
    'pushSeason(address)': FunctionFragment;
    'seasons(uint256)': FunctionFragment;
    'setOGN(address)': FunctionFragment;
    'setVault(address)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferGovernance(address)': FunctionFragment;
    'unstake()': FunctionFragment;
    'vault()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'bootstrapSeason'
      | 'claim'
      | 'claimGovernance'
      | 'currentClaimingIndex'
      | 'currentStakingIndex'
      | 'expectedClaimingSeason'
      | 'expectedStakingSeason'
      | 'governor'
      | 'initialize'
      | 'isGovernor'
      | 'latestStakeTime'
      | 'liveSeason'
      | 'ogn'
      | 'popSeason'
      | 'pushSeason'
      | 'seasons'
      | 'setOGN'
      | 'setVault'
      | 'stake'
      | 'totalSupply'
      | 'transferGovernance'
      | 'unstake'
      | 'vault',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'bootstrapSeason', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'claim', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimGovernance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentClaimingIndex', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentStakingIndex', values?: undefined): string;
  encodeFunctionData(functionFragment: 'expectedClaimingSeason', values?: undefined): string;
  encodeFunctionData(functionFragment: 'expectedStakingSeason', values?: undefined): string;
  encodeFunctionData(functionFragment: 'governor', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'isGovernor', values?: undefined): string;
  encodeFunctionData(functionFragment: 'latestStakeTime', values: [string]): string;
  encodeFunctionData(functionFragment: 'liveSeason', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ogn', values?: undefined): string;
  encodeFunctionData(functionFragment: 'popSeason', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pushSeason', values: [string]): string;
  encodeFunctionData(functionFragment: 'seasons', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setOGN', values: [string]): string;
  encodeFunctionData(functionFragment: 'setVault', values: [string]): string;
  encodeFunctionData(functionFragment: 'stake', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferGovernance', values: [string]): string;
  encodeFunctionData(functionFragment: 'unstake', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vault', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bootstrapSeason', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimGovernance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentClaimingIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentStakingIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'expectedClaimingSeason', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'expectedStakingSeason', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'governor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isGovernor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'latestStakeTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liveSeason', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ogn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'popSeason', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pushSeason', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'seasons', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOGN', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferGovernance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unstake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result;

  events: {
    'GovernorshipTransferred(address,address)': EventFragment;
    'NewSeason(uint256,address)': EventFragment;
    'PendingGovernorshipTransfer(address,address)': EventFragment;
    'SeasonCancelled(address)': EventFragment;
    'SeasonStart(uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GovernorshipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NewSeason'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PendingGovernorshipTransfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SeasonCancelled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SeasonStart'): EventFragment;
}

export interface GovernorshipTransferredEventObject {
  previousGovernor: string;
  newGovernor: string;
}
export type GovernorshipTransferredEvent = TypedEvent<[string, string], GovernorshipTransferredEventObject>;

export type GovernorshipTransferredEventFilter = TypedEventFilter<GovernorshipTransferredEvent>;

export interface NewSeasonEventObject {
  number: BigNumber;
  season: string;
}
export type NewSeasonEvent = TypedEvent<[BigNumber, string], NewSeasonEventObject>;

export type NewSeasonEventFilter = TypedEventFilter<NewSeasonEvent>;

export interface PendingGovernorshipTransferEventObject {
  previousGovernor: string;
  newGovernor: string;
}
export type PendingGovernorshipTransferEvent = TypedEvent<[string, string], PendingGovernorshipTransferEventObject>;

export type PendingGovernorshipTransferEventFilter = TypedEventFilter<PendingGovernorshipTransferEvent>;

export interface SeasonCancelledEventObject {
  season: string;
}
export type SeasonCancelledEvent = TypedEvent<[string], SeasonCancelledEventObject>;

export type SeasonCancelledEventFilter = TypedEventFilter<SeasonCancelledEvent>;

export interface SeasonStartEventObject {
  number: BigNumber;
  season: string;
}
export type SeasonStartEvent = TypedEvent<[BigNumber, string], SeasonStartEventObject>;

export type SeasonStartEventFilter = TypedEventFilter<SeasonStartEvent>;

export interface Series extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SeriesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(userAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    bootstrapSeason(
      seasonIndex: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    claim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    claimGovernance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    currentClaimingIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentStakingIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    expectedClaimingSeason(overrides?: CallOverrides): Promise<[string]>;

    expectedStakingSeason(overrides?: CallOverrides): Promise<[string]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      ogn_: string,
      vault_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    isGovernor(overrides?: CallOverrides): Promise<[boolean]>;

    latestStakeTime(userAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    liveSeason(overrides?: CallOverrides): Promise<[BigNumber]>;

    ogn(overrides?: CallOverrides): Promise<[string]>;

    popSeason(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    pushSeason(
      season: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    seasons(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setOGN(ogn_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setVault(vault_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferGovernance(
      _newGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unstake(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  balanceOf(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

  bootstrapSeason(
    seasonIndex: BigNumberish,
    totalStaked: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  claim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  claimGovernance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  currentClaimingIndex(overrides?: CallOverrides): Promise<BigNumber>;

  currentStakingIndex(overrides?: CallOverrides): Promise<BigNumber>;

  expectedClaimingSeason(overrides?: CallOverrides): Promise<string>;

  expectedStakingSeason(overrides?: CallOverrides): Promise<string>;

  governor(overrides?: CallOverrides): Promise<string>;

  initialize(
    ogn_: string,
    vault_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  isGovernor(overrides?: CallOverrides): Promise<boolean>;

  latestStakeTime(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

  liveSeason(overrides?: CallOverrides): Promise<BigNumber>;

  ogn(overrides?: CallOverrides): Promise<string>;

  popSeason(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  pushSeason(season: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  seasons(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setOGN(ogn_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setVault(vault_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferGovernance(
    _newGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unstake(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceOf(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    bootstrapSeason(seasonIndex: BigNumberish, totalStaked: BigNumberish, overrides?: CallOverrides): Promise<void>;

    claim(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    claimGovernance(overrides?: CallOverrides): Promise<void>;

    currentClaimingIndex(overrides?: CallOverrides): Promise<BigNumber>;

    currentStakingIndex(overrides?: CallOverrides): Promise<BigNumber>;

    expectedClaimingSeason(overrides?: CallOverrides): Promise<string>;

    expectedStakingSeason(overrides?: CallOverrides): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    initialize(ogn_: string, vault_: string, overrides?: CallOverrides): Promise<void>;

    isGovernor(overrides?: CallOverrides): Promise<boolean>;

    latestStakeTime(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    liveSeason(overrides?: CallOverrides): Promise<BigNumber>;

    ogn(overrides?: CallOverrides): Promise<string>;

    popSeason(overrides?: CallOverrides): Promise<void>;

    pushSeason(season: string, overrides?: CallOverrides): Promise<void>;

    seasons(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setOGN(ogn_: string, overrides?: CallOverrides): Promise<void>;

    setVault(vault_: string, overrides?: CallOverrides): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferGovernance(_newGovernor: string, overrides?: CallOverrides): Promise<void>;

    unstake(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'GovernorshipTransferred(address,address)'(
      previousGovernor?: string | null,
      newGovernor?: string | null,
    ): GovernorshipTransferredEventFilter;
    GovernorshipTransferred(
      previousGovernor?: string | null,
      newGovernor?: string | null,
    ): GovernorshipTransferredEventFilter;

    'NewSeason(uint256,address)'(number?: BigNumberish | null, season?: string | null): NewSeasonEventFilter;
    NewSeason(number?: BigNumberish | null, season?: string | null): NewSeasonEventFilter;

    'PendingGovernorshipTransfer(address,address)'(
      previousGovernor?: string | null,
      newGovernor?: string | null,
    ): PendingGovernorshipTransferEventFilter;
    PendingGovernorshipTransfer(
      previousGovernor?: string | null,
      newGovernor?: string | null,
    ): PendingGovernorshipTransferEventFilter;

    'SeasonCancelled(address)'(season?: string | null): SeasonCancelledEventFilter;
    SeasonCancelled(season?: string | null): SeasonCancelledEventFilter;

    'SeasonStart(uint256,address)'(number?: BigNumberish | null, season?: string | null): SeasonStartEventFilter;
    SeasonStart(number?: BigNumberish | null, season?: string | null): SeasonStartEventFilter;
  };

  estimateGas: {
    balanceOf(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    bootstrapSeason(
      seasonIndex: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    claim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    claimGovernance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    currentClaimingIndex(overrides?: CallOverrides): Promise<BigNumber>;

    currentStakingIndex(overrides?: CallOverrides): Promise<BigNumber>;

    expectedClaimingSeason(overrides?: CallOverrides): Promise<BigNumber>;

    expectedStakingSeason(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      ogn_: string,
      vault_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    isGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    latestStakeTime(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    liveSeason(overrides?: CallOverrides): Promise<BigNumber>;

    ogn(overrides?: CallOverrides): Promise<BigNumber>;

    popSeason(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    pushSeason(season: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    seasons(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setOGN(ogn_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setVault(vault_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferGovernance(
      _newGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    unstake(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(userAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bootstrapSeason(
      seasonIndex: BigNumberish,
      totalStaked: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    claimGovernance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    currentClaimingIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentStakingIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expectedClaimingSeason(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expectedStakingSeason(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      ogn_: string,
      vault_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    isGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestStakeTime(userAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liveSeason(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ogn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    popSeason(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    pushSeason(
      season: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    seasons(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOGN(ogn_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setVault(
      vault_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferGovernance(
      _newGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unstake(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
