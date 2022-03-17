import { NavigationProp, RouteProp } from "@react-navigation/core";
import { Source } from "react-native-fast-image";

export interface GenericNavigation {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

//Constant Types
export interface ChartItem {
  key: number;
  amount: number;
  svg: { fill: string };
  onPress?: (key: string) => void;
}

export interface IntroSlide {
  key: number;
  title: string;
  text: string;
  image: any;
}

export enum ScreenSelectionType {
  Currency = "currency",
  Langugage = "language",
}

export interface Transaction {
  __v: number;
  _id: string;
  amount: string;
  blockHeight: number;
  coinSymbol: string;
  confirmations: number;
  createdAt: Date;
  explorer: string;
  explorerUrl: string;
  from: string;
  status: string;
  timeStamp: string;
  to: string;
  txId: string;
  updatedAt: Date;
  epoch?: number;
}

//Store State Types

export interface CoinIcon {
  _id: string;
  key: string;
  url: string;
  updatedAt: string;
  createdAt: string;
}
export interface Coin {
  index: number;
  orderIndex: number;
  icon: CoinIcon;
  coin_name: string;
  coin_symbol: string;
  is_active: boolean;
  is_erc20: boolean;
  is_bep20: boolean;
  is_trc20: boolean;
  is_bep2: boolean;
  isMarketDataAvailable?: boolean;
  isRateAvailable: boolean;
  balance: string;
  coin_color: string;
  processingFee: string;
  blockchain?: string;
  contractAddress: string;
  contractAbi: any;
  decimal: number;
  //Remaining
  public_key: string;
  private_key: string;
  address: string;
  wif: string;
  seed: string;
  hd_path: string;
  confirmed_balance: string;
  unconfirmed_balance: string;
  chart_data: any;
  vs_currency_balance: string;
  tx_history: any;
}

export interface Mnemonic {
  mnemonic_phrase: string;
  is_restore: boolean;
}

export interface PasswordProtection {
  password: string;
  is_restore: boolean;
  status: boolean;
}
export interface WalletState {
  wallet: Coin[];
  isRendered: boolean;
  walletRendered: boolean;
  mnemonic: Mnemonic;
  password_protection: PasswordProtection;
  isProtected: boolean;
  walletReady: boolean;
  walletDataLoaded: boolean;
  best24H: string;
  best24HBalance: string;
  worst24H: string;
  change24H: 0;
  defaultCurrency: string;
  portfolioChartData: any;
  walletLoading: boolean;
  walletRefreshing: boolean;
  bep20_fee: string;
  erc20_fee: string;
  doge_fee: string;
  btc_fee: string;
}

export interface UserState {}
//Extra Funciton types
export interface GenerateWalletParams {
  coinSymbol: string;
  recovery: boolean;
  mnemonics: string;
}

export interface SendPayload {
  to: string;
  amount: string;
  from: string | undefined;
  symbol: string | undefined;
  private_key: string | undefined;
  public_key: string | undefined;
  is_erc20: boolean | undefined;
  processingFee: any;
  feeReceivingAccount: any;
  contractAbi: any;
  contractAddress: any;
}

export interface CoinCategory {
  id: number;
  selected: boolean;
  name: string;
  image: number | Source;
  label: string;
  value: string;
  blockchain: string;
}

//News Types
export interface ImageEntity {
  _id: string;
  createdAt: Date;
  key: string;
  updatedAt: Date;
  url: string;
}

export interface NewsEntity {
  __v: number;
  _id: string;
  content: string;
  createdAt: Date;
  description: string;
  featuredImage: ImageEntity;
  tags: string;
  title: string;
  updatedAt: Date;
  tagsArray?: string[];
}

//Address Book Types

export interface ContactEntity {
  __v: number;
  _id: string;
  address: string;
  blockchain: string;
  contactName: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

//DappsEntity

export interface DappEntity {
  _id: string;
  image: ImageEntity;
  title: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  shortDescription: string;
  isFeatured: boolean;
}

//Add Public Info Payload

export interface PublicInfoPayload {
  address: string;
  coinSymbol: string;
  hdPath: string;
}

//WC CallConnect

export interface Param {
  chainId: number;
  peerId: string;
  peerMeta: any;
}

export interface WCPayloadEntity {
  id: number;
  jsonrpc: string;
  method: string;
  params: Param[];
}

//Component Types

export interface TopAlertEntity {
  __v: number;
  _id: string;
  createdAt: Date;
  description: string;
  showAlert: boolean;
  title: string;
  updatedAt: Date;
}

//API Responses Type

export interface CoinBalancesResEntity {
  address: string;
  balance: number;
  coinSymbol: string;
  vs_currency_balance: number;
}

//Fees Types

export interface NetworkFeeEntity {
  networkFee: string | number;
  networkFeeFiat: string | number;
  gasLimit?: number;
  gasPrice?: any;
}

export interface ContractFunctionsMethodRes {
  networkFee: NetworkFeeEntity;
  signedTxParams?: {
    contractAddress: string | any;
    encodedAbi: any;
    value: any;
  };
}

export interface Call {
  address: string; // Address of the contract
  name: string; // Function name on the contract (exemple: balanceOf)
  params?: any[]; // Function params
}
//Swap Contract Types
export interface ContractTxPayload {
  coin: Coin;
  contractAddress: string;
  networkFeeObject: NetworkFeeEntity;
  amount?: number;
}
