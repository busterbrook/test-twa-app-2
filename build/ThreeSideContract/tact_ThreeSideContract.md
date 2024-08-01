# TACT Compilation Report
Contract: ThreeSideContract
BOC Size: 1345 bytes

# Types
Total Types: 11

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## Offer
TLB: `_ id:uint32 amountOut:coins amountIn:coins currencyOut:^string currencyIn:^string makerAddress:address takerAddress:address = Offer`
Signature: `Offer{id:uint32,amountOut:coins,amountIn:coins,currencyOut:^string,currencyIn:^string,makerAddress:address,takerAddress:address}`

## LoadBalane
TLB: `load_balane#efa8a73d amountLoad:coins = LoadBalane`
Signature: `LoadBalane{amountLoad:coins}`

## CreateOffer
TLB: `create_offer#90f72394 offerId:uint32 amountOut:coins currencyOut:^string amountIn:coins currencyIn:^string addressMaker:address = CreateOffer`
Signature: `CreateOffer{offerId:uint32,amountOut:coins,currencyOut:^string,amountIn:coins,currencyIn:^string,addressMaker:address}`

## Swap
TLB: `swap#2b67fc73 offerId:uint32 addressTaker:address = Swap`
Signature: `Swap{offerId:uint32,addressTaker:address}`

## Claim
TLB: `claim#54cafbb3 offerId:uint32 addressMaker:address = Claim`
Signature: `Claim{offerId:uint32,addressMaker:address}`

# Get Methods
Total Get Methods: 0

# Error Codes
2: Stack underflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract

# Trait Inheritance Diagram

```mermaid
graph TD
ThreeSideContract
ThreeSideContract --> BaseTrait
ThreeSideContract --> Deployable
Deployable --> BaseTrait
```

# Contract Dependency Diagram

```mermaid
graph TD
ThreeSideContract
```