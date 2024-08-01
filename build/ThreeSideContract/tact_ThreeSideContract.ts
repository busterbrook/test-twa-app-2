import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Offer = {
    $$type: 'Offer';
    id: bigint;
    amountOut: bigint;
    amountIn: bigint;
    currencyOut: string;
    currencyIn: string;
    makerAddress: Address;
    takerAddress: Address;
}

export function storeOffer(src: Offer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 32);
        b_0.storeCoins(src.amountOut);
        b_0.storeCoins(src.amountIn);
        b_0.storeStringRefTail(src.currencyOut);
        b_0.storeStringRefTail(src.currencyIn);
        b_0.storeAddress(src.makerAddress);
        b_0.storeAddress(src.takerAddress);
    };
}

export function loadOffer(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(32);
    let _amountOut = sc_0.loadCoins();
    let _amountIn = sc_0.loadCoins();
    let _currencyOut = sc_0.loadStringRefTail();
    let _currencyIn = sc_0.loadStringRefTail();
    let _makerAddress = sc_0.loadAddress();
    let _takerAddress = sc_0.loadAddress();
    return { $$type: 'Offer' as const, id: _id, amountOut: _amountOut, amountIn: _amountIn, currencyOut: _currencyOut, currencyIn: _currencyIn, makerAddress: _makerAddress, takerAddress: _takerAddress };
}

function loadTupleOffer(source: TupleReader) {
    let _id = source.readBigNumber();
    let _amountOut = source.readBigNumber();
    let _amountIn = source.readBigNumber();
    let _currencyOut = source.readString();
    let _currencyIn = source.readString();
    let _makerAddress = source.readAddress();
    let _takerAddress = source.readAddress();
    return { $$type: 'Offer' as const, id: _id, amountOut: _amountOut, amountIn: _amountIn, currencyOut: _currencyOut, currencyIn: _currencyIn, makerAddress: _makerAddress, takerAddress: _takerAddress };
}

function storeTupleOffer(source: Offer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeNumber(source.amountOut);
    builder.writeNumber(source.amountIn);
    builder.writeString(source.currencyOut);
    builder.writeString(source.currencyIn);
    builder.writeAddress(source.makerAddress);
    builder.writeAddress(source.takerAddress);
    return builder.build();
}

function dictValueParserOffer(): DictionaryValue<Offer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOffer(src)).endCell());
        },
        parse: (src) => {
            return loadOffer(src.loadRef().beginParse());
        }
    }
}

export type LoadBalane = {
    $$type: 'LoadBalane';
    amountLoad: bigint;
}

export function storeLoadBalane(src: LoadBalane) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4020807485, 32);
        b_0.storeCoins(src.amountLoad);
    };
}

export function loadLoadBalane(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4020807485) { throw Error('Invalid prefix'); }
    let _amountLoad = sc_0.loadCoins();
    return { $$type: 'LoadBalane' as const, amountLoad: _amountLoad };
}

function loadTupleLoadBalane(source: TupleReader) {
    let _amountLoad = source.readBigNumber();
    return { $$type: 'LoadBalane' as const, amountLoad: _amountLoad };
}

function storeTupleLoadBalane(source: LoadBalane) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amountLoad);
    return builder.build();
}

function dictValueParserLoadBalane(): DictionaryValue<LoadBalane> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeLoadBalane(src)).endCell());
        },
        parse: (src) => {
            return loadLoadBalane(src.loadRef().beginParse());
        }
    }
}

export type CreateOffer = {
    $$type: 'CreateOffer';
    offerId: bigint;
    amountOut: bigint;
    currencyOut: string;
    amountIn: bigint;
    currencyIn: string;
    addressMaker: Address;
}

export function storeCreateOffer(src: CreateOffer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2432115604, 32);
        b_0.storeUint(src.offerId, 32);
        b_0.storeCoins(src.amountOut);
        b_0.storeStringRefTail(src.currencyOut);
        b_0.storeCoins(src.amountIn);
        b_0.storeStringRefTail(src.currencyIn);
        b_0.storeAddress(src.addressMaker);
    };
}

export function loadCreateOffer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2432115604) { throw Error('Invalid prefix'); }
    let _offerId = sc_0.loadUintBig(32);
    let _amountOut = sc_0.loadCoins();
    let _currencyOut = sc_0.loadStringRefTail();
    let _amountIn = sc_0.loadCoins();
    let _currencyIn = sc_0.loadStringRefTail();
    let _addressMaker = sc_0.loadAddress();
    return { $$type: 'CreateOffer' as const, offerId: _offerId, amountOut: _amountOut, currencyOut: _currencyOut, amountIn: _amountIn, currencyIn: _currencyIn, addressMaker: _addressMaker };
}

function loadTupleCreateOffer(source: TupleReader) {
    let _offerId = source.readBigNumber();
    let _amountOut = source.readBigNumber();
    let _currencyOut = source.readString();
    let _amountIn = source.readBigNumber();
    let _currencyIn = source.readString();
    let _addressMaker = source.readAddress();
    return { $$type: 'CreateOffer' as const, offerId: _offerId, amountOut: _amountOut, currencyOut: _currencyOut, amountIn: _amountIn, currencyIn: _currencyIn, addressMaker: _addressMaker };
}

function storeTupleCreateOffer(source: CreateOffer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.offerId);
    builder.writeNumber(source.amountOut);
    builder.writeString(source.currencyOut);
    builder.writeNumber(source.amountIn);
    builder.writeString(source.currencyIn);
    builder.writeAddress(source.addressMaker);
    return builder.build();
}

function dictValueParserCreateOffer(): DictionaryValue<CreateOffer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCreateOffer(src)).endCell());
        },
        parse: (src) => {
            return loadCreateOffer(src.loadRef().beginParse());
        }
    }
}

export type Swap = {
    $$type: 'Swap';
    offerId: bigint;
    addressTaker: Address;
}

export function storeSwap(src: Swap) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(728235123, 32);
        b_0.storeUint(src.offerId, 32);
        b_0.storeAddress(src.addressTaker);
    };
}

export function loadSwap(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 728235123) { throw Error('Invalid prefix'); }
    let _offerId = sc_0.loadUintBig(32);
    let _addressTaker = sc_0.loadAddress();
    return { $$type: 'Swap' as const, offerId: _offerId, addressTaker: _addressTaker };
}

function loadTupleSwap(source: TupleReader) {
    let _offerId = source.readBigNumber();
    let _addressTaker = source.readAddress();
    return { $$type: 'Swap' as const, offerId: _offerId, addressTaker: _addressTaker };
}

function storeTupleSwap(source: Swap) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.offerId);
    builder.writeAddress(source.addressTaker);
    return builder.build();
}

function dictValueParserSwap(): DictionaryValue<Swap> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSwap(src)).endCell());
        },
        parse: (src) => {
            return loadSwap(src.loadRef().beginParse());
        }
    }
}

export type Claim = {
    $$type: 'Claim';
    offerId: bigint;
    addressMaker: Address;
}

export function storeClaim(src: Claim) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1422588851, 32);
        b_0.storeUint(src.offerId, 32);
        b_0.storeAddress(src.addressMaker);
    };
}

export function loadClaim(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1422588851) { throw Error('Invalid prefix'); }
    let _offerId = sc_0.loadUintBig(32);
    let _addressMaker = sc_0.loadAddress();
    return { $$type: 'Claim' as const, offerId: _offerId, addressMaker: _addressMaker };
}

function loadTupleClaim(source: TupleReader) {
    let _offerId = source.readBigNumber();
    let _addressMaker = source.readAddress();
    return { $$type: 'Claim' as const, offerId: _offerId, addressMaker: _addressMaker };
}

function storeTupleClaim(source: Claim) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.offerId);
    builder.writeAddress(source.addressMaker);
    return builder.build();
}

function dictValueParserClaim(): DictionaryValue<Claim> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaim(src)).endCell());
        },
        parse: (src) => {
            return loadClaim(src.loadRef().beginParse());
        }
    }
}

 type ThreeSideContract_init_args = {
    $$type: 'ThreeSideContract_init_args';
}

function initThreeSideContract_init_args(src: ThreeSideContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function ThreeSideContract_init() {
    const __code = Cell.fromBase64('te6ccgECEgEABTUAART/APSkE/S88sgLAQIBYgIDA5rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFts88uCCyPhDAcx/AcoAVWDbPMntVAQFBgARoYV92omhpAADAj7tRNDUAfhj0gABjoTbPGwX4DD4KNcLCoMJuvLgids8BwgE1gGSMH/gcCHXScIflTAg1wsf3iCCEO+opz264wIgghCQ9yOUuuMCIIIQK2f8c7qOsjDTHwGCECtn/HO68uCB0x/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwS4CCCEFTK+7O6CQoLDACuUGfLH1AE+gJY+gLIWM8WyQHMyFjPFskBzAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WAKbTH/oA+gDUAdAB1AHQAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBcWFRRDMAAicFMAizVE9OiLNUT06PhC+EIA4DDTHwGCEO+opz268uCB+gABMTCLtsb2FkIFN1Y2Nlc4jQTZHVtcCgibG9hZCBTdWNjZXMiKYI0LUZpbGUgY29udHJhY3RzL3RocmVlX3NpZGVfY29udHJhY3QudGFjdDo1OTo5OoP4UMP4UMP4UMH8B+jDbPGwWNzc3Nzc3jQUQ3JlYXRlIG9mZmVyIHN1Y2Nlc3OCNBxkdW1wKCJDcmVhdGUgb2ZmZXIgc3VjY2VzcyIpgjQtRmlsZSBjb250cmFjdHMvdGhyZWVfc2lkZV9jb250cmFjdC50YWN0OjcwOjk6g/hQw/hQw/hQwEDR/DQH4Mie6jvUkwwCTJcMAkXDijolUdlRUdlQm2zyOXYu2Vycm9yIGxheWVyiNBNkdW1wKCJlcnJvciBsYXllciIpgjQuRmlsZSBjb250cmFjdHMvdGhyZWVfc2lkZV9jb250cmFjdC50YWN0OjgwOjE3OoP4UMP4UMP4UMOLefw4C+I7GMNMfAYIQVMr7s7ry4IHTH/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBJbfyaCCAYagKAjWXIQI21tbds8f+CCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAQDwB+0x8BghCQ9yOUuvLggdMf+gDUAdAB+gDUAdAB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBYVFEMwA8hfBGwSgggGGoCgAYIIBhqAoPgnbxAioSGhggkxLQChf1RFFHIQI21tbds8fyMCchAjbW1t2zyNCGADDeTyKQ55KIx4VM8PJrhRcVk+WlRB8N1cTkt7uKnR8lx/WHIQI21tbds8EBAQATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBAByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzA==');
    const __system = Cell.fromBase64('te6cckECFAEABT8AAQHAAQEFoOGrAgEU/wD0pBP0vPLICwMCAWIEEwOa0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRbbPPLggsj4QwHMfwHKAFVg2zzJ7VQFCBICPu1E0NQB+GPSAAGOhNs8bBfgMPgo1wsKgwm68uCJ2zwGBwCm0x/6APoA1AHQAdQB0AH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgXFhUUQzAAInBTAIs1RPToizVE9Oj4QvhCBNYBkjB/4HAh10nCH5UwINcLH94gghDvqKc9uuMCIIIQkPcjlLrjAiCCECtn/HO6jrIw0x8BghArZ/xzuvLggdMf+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEuAgghBUyvuzugkKDA4A4DDTHwGCEO+opz268uCB+gABMTCLtsb2FkIFN1Y2Nlc4jQTZHVtcCgibG9hZCBTdWNjZXMiKYI0LUZpbGUgY29udHJhY3RzL3RocmVlX3NpZGVfY29udHJhY3QudGFjdDo1OTo5OoP4UMP4UMP4UMH8B+jDbPGwWNzc3Nzc3jQUQ3JlYXRlIG9mZmVyIHN1Y2Nlc3OCNBxkdW1wKCJDcmVhdGUgb2ZmZXIgc3VjY2VzcyIpgjQtRmlsZSBjb250cmFjdHMvdGhyZWVfc2lkZV9jb250cmFjdC50YWN0OjcwOjk6g/hQw/hQw/hQwEDR/CwB+0x8BghCQ9yOUuvLggdMf+gDUAdAB+gDUAdAB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBYVFEMwAfgyJ7qO9STDAJMlwwCRcOKOiVR2VFR2VCbbPI5di7ZXJyb3IgbGF5ZXKI0E2R1bXAoImVycm9yIGxheWVyIimCNC5GaWxlIGNvbnRyYWN0cy90aHJlZV9zaWRlX2NvbnRyYWN0LnRhY3Q6ODA6MTc6g/hQw/hQw/hQw4t5/DQPIXwRsEoIIBhqAoAGCCAYagKD4J28QIqEhoYIJMS0AoX9URRRyECNtbW3bPH8jAnIQI21tbds8jQhgAw3k8ikOeSiMeFTPDya4UXFZPlpUQfDdXE5Le7ip0fJcf1hyECNtbW3bPBAQEAL4jsYw0x8BghBUyvuzuvLggdMf+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsElt/JoIIBhqAoCNZchAjbW1t2zx/4IIQlGqYtrqOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcBAPATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBAByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzACuUGfLH1AE+gJY+gLIWM8WyQHMyFjPFskBzAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WABGhhX3aiaGkAAPOErjN');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initThreeSideContract_init_args({ $$type: 'ThreeSideContract_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const ThreeSideContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
}

const ThreeSideContract_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Offer","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"amountOut","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"amountIn","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"currencyOut","type":{"kind":"simple","type":"string","optional":false}},{"name":"currencyIn","type":{"kind":"simple","type":"string","optional":false}},{"name":"makerAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"takerAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"LoadBalane","header":4020807485,"fields":[{"name":"amountLoad","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"CreateOffer","header":2432115604,"fields":[{"name":"offerId","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"amountOut","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"currencyOut","type":{"kind":"simple","type":"string","optional":false}},{"name":"amountIn","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"currencyIn","type":{"kind":"simple","type":"string","optional":false}},{"name":"addressMaker","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Swap","header":728235123,"fields":[{"name":"offerId","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"addressTaker","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Claim","header":1422588851,"fields":[{"name":"offerId","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"addressMaker","type":{"kind":"simple","type":"address","optional":false}}]},
]

const ThreeSideContract_getters: ABIGetter[] = [
]

export const ThreeSideContract_getterMapping: { [key: string]: string } = {
}

const ThreeSideContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"LoadBalane"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CreateOffer"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Swap"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Claim"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class ThreeSideContract implements Contract {
    
    static async init() {
        return await ThreeSideContract_init();
    }
    
    static async fromInit() {
        const init = await ThreeSideContract_init();
        const address = contractAddress(0, init);
        return new ThreeSideContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new ThreeSideContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  ThreeSideContract_types,
        getters: ThreeSideContract_getters,
        receivers: ThreeSideContract_receivers,
        errors: ThreeSideContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: LoadBalane | CreateOffer | Swap | Claim | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'LoadBalane') {
            body = beginCell().store(storeLoadBalane(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateOffer') {
            body = beginCell().store(storeCreateOffer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Swap') {
            body = beginCell().store(storeSwap(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Claim') {
            body = beginCell().store(storeClaim(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
}