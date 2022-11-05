var providerRpcUrl = "https://goerli.infura.io/v3/0540a9d95e784f958bc86ecc52b5f2c4";
var Address = "0xf83390a0ec3CF4F4E4Cb32c54f1B69d8e3938056";
var ABI = [
	{inputs: [], stateMutability: "nonpayable", type: "constructor"},
	{
		anonymous: false,
		inputs: [
			{indexed: true, internalType: "address", name: "owner", type: "address"},
			{indexed: true, internalType: "address", name: "spender", type: "address"},
			{indexed: false, internalType: "uint256", name: "value", type: "uint256"},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, internalType: "address", name: "previousOwner", type: "address"},
			{indexed: true, internalType: "address", name: "newOwner", type: "address"},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, internalType: "address", name: "from", type: "address"},
			{indexed: true, internalType: "address", name: "to", type: "address"},
			{indexed: false, internalType: "uint256", name: "value", type: "uint256"},
		],
		name: "Transfer",
		type: "event",
	},
	{inputs: [], name: "ONE_HUNDRED_PERCENT", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{
		inputs: [{internalType: "address", name: "", type: "address"}],
		name: "_isExcludedFromLimit",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{internalType: "address", name: "", type: "address"}],
		name: "_lastTransferTimestamp",
		outputs: [{internalType: "uint256", name: "", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{inputs: [], name: "_limitsInEffect", outputs: [{internalType: "bool", name: "", type: "bool"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "_maxTransactionAmount", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "_maxWallet", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "_swapTokensAtAmount", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "_tradingActive", outputs: [{internalType: "bool", name: "", type: "bool"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "_transferDelay", outputs: [{internalType: "bool", name: "", type: "bool"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "activeTrading", outputs: [], stateMutability: "nonpayable", type: "function"},
	{
		inputs: [
			{internalType: "address", name: "owner", type: "address"},
			{internalType: "address", name: "spender", type: "address"},
		],
		name: "allowance",
		outputs: [{internalType: "uint256", name: "", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{internalType: "address", name: "spender", type: "address"},
			{internalType: "uint256", name: "amount", type: "uint256"},
		],
		name: "approve",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{internalType: "address", name: "account", type: "address"}],
		name: "balanceOf",
		outputs: [{internalType: "uint256", name: "", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{internalType: "address", name: "", type: "address"}],
		name: "buyAmount",
		outputs: [{internalType: "uint256", name: "", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{inputs: [], name: "buyLiquidityFee", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "buyMarketingFee", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "buyRewardFee", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "buySteps", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "buyTotalFees", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "counter", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "decimals", outputs: [{internalType: "uint8", name: "", type: "uint8"}], stateMutability: "view", type: "function"},
	{
		inputs: [
			{internalType: "address", name: "spender", type: "address"},
			{internalType: "uint256", name: "subtractedValue", type: "uint256"},
		],
		name: "decreaseAllowance",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "nonpayable",
		type: "function",
	},
	{inputs: [], name: "decreasePerBlock", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "disableReward", outputs: [], stateMutability: "nonpayable", type: "function"},
	{inputs: [], name: "disableTransferDelay", outputs: [], stateMutability: "nonpayable", type: "function"},
	{inputs: [], name: "enableReward", outputs: [], stateMutability: "nonpayable", type: "function"},
	{inputs: [], name: "enableTransferDelay", outputs: [], stateMutability: "nonpayable", type: "function"},
	{
		inputs: [
			{internalType: "address", name: "account", type: "address"},
			{internalType: "bool", name: "excluded", type: "bool"},
		],
		name: "excludeFromFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{internalType: "address", name: "updAds", type: "address"},
			{internalType: "bool", name: "isEx", type: "bool"},
		],
		name: "excludeFromLimit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{internalType: "address", name: "userAddress", type: "address"}],
		name: "getBuyAmount",
		outputs: [{internalType: "uint256", name: "value", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{internalType: "address", name: "userAddress", type: "address"}],
		name: "getTaxPenalty",
		outputs: [{internalType: "uint256", name: "value", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{internalType: "uint256", name: "index", type: "uint256"}],
		name: "getTopBuyer",
		outputs: [
			{internalType: "uint256", name: "", type: "uint256"},
			{internalType: "address", name: "", type: "address"},
			{internalType: "uint256", name: "", type: "uint256"},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTopBuyers",
		outputs: [
			{internalType: "uint256[]", name: "", type: "uint256[]"},
			{internalType: "address[]", name: "", type: "address[]"},
			{internalType: "uint256[]", name: "", type: "uint256[]"},
		],
		stateMutability: "view",
		type: "function",
	},
	{inputs: [], name: "goal", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "hitterRewardPercent", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{
		inputs: [
			{internalType: "address", name: "spender", type: "address"},
			{internalType: "uint256", name: "addedValue", type: "uint256"},
		],
		name: "increaseAllowance",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "nonpayable",
		type: "function",
	},
	{inputs: [], name: "initPenalty", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{
		inputs: [{internalType: "address", name: "account", type: "address"}],
		name: "isExcludedFromFees",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "view",
		type: "function",
	},
	{inputs: [], name: "lastHitter", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "lastTop1Buyer", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "lastTop2Buyer", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "marketingWallet", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "minTransAmountForReward", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "name", outputs: [{internalType: "string", name: "", type: "string"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "owner", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "pair", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "removeLimits", outputs: [], stateMutability: "nonpayable", type: "function"},
	{inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function"},
	{inputs: [], name: "rewardEnable", outputs: [{internalType: "bool", name: "", type: "bool"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "sellLiquidityFee", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "sellMarketingFee", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "sellRewardFee", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "sellSteps", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "sellTotalFees", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "symbol", outputs: [{internalType: "string", name: "", type: "string"}], stateMutability: "view", type: "function"},
	{
		inputs: [{internalType: "address", name: "", type: "address"}],
		name: "taxPenalties",
		outputs: [{internalType: "uint256", name: "", type: "uint256"}],
		stateMutability: "view",
		type: "function",
	},
	{inputs: [], name: "tokensForLiquidity", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "tokensForMarketing", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "tokensForReward", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "top1BuyerRewardPercent", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{inputs: [], name: "top2BuyerRewardPercent", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{
		inputs: [{internalType: "uint256", name: "", type: "uint256"}],
		name: "topBuyers",
		outputs: [
			{internalType: "uint256", name: "balance", type: "uint256"},
			{internalType: "address", name: "addr", type: "address"},
		],
		stateMutability: "view",
		type: "function",
	},
	{inputs: [], name: "totalSupply", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"},
	{
		inputs: [
			{internalType: "address", name: "to", type: "address"},
			{internalType: "uint256", name: "amount", type: "uint256"},
		],
		name: "transfer",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{internalType: "address", name: "from", type: "address"},
			{internalType: "address", name: "to", type: "address"},
			{internalType: "uint256", name: "amount", type: "uint256"},
		],
		name: "transferFrom",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{internalType: "address", name: "newOwner", type: "address"}],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{internalType: "uint256", name: "newAmount", type: "uint256"}],
		name: "updateMaxTxnAmount",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{internalType: "uint256", name: "newNum", type: "uint256"}],
		name: "updateMaxWalletAmount",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{internalType: "uint256", name: "newAmount", type: "uint256"}],
		name: "updateSwapTokensAtAmount",
		outputs: [{internalType: "bool", name: "", type: "bool"}],
		stateMutability: "nonpayable",
		type: "function",
	},
	{stateMutability: "payable", type: "receive"},
];

async function loadWeb3() {
	window.provider = new Web3.providers.HttpProvider(providerRpcUrl);
	window.web3 = new Web3(provider);
	window.contract = await new web3.eth.Contract(ABI, Address, provider);
}

loadWeb3();

$(document).ready(function () {
	async function getTopBuyers() {
		var res = await window.contract.methods.getTopBuyers().call();
		var addresses = res[1];
		var amounts = res[2];
		var result = [];
		for (let i = 0; i < addresses.length && i < 10; i++) {
			result.push({address: addresses[i], amount: amounts[i]});
		}
		return result;
	}
	function replaceTemplate(template, data) {
		Object.keys(data).forEach(function (key) {
			var value = data[key];
			template = template.replace("${" + key + "}", value);
			template = template.replace("${" + key + "}", value);
			template = template.replaceAll("${" + key + "}", value);
		});
		return template;
	}
	function parseCurrency(value) {
		return parseInt(value, 10)
			.toFixed(1)
			.replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
			.toString()
			.split(".")[0];
	}
	function loadTopBuyers() {
		getTopBuyers().then(function (topBuyers) {
			var $container = $("#listRanking");
			var template = $("#rankingItem").text();
			$container.html("");
			topBuyers.forEach(function (data, index) {
				var html = replaceTemplate(template, {no: index + 1, address: data.address, amount: parseCurrency(data.amount)});
				$container.append(html);
			});
		});
	}
	function loadCounter() {
		window.contract.methods
			.counter()
			.call()
			.then(function (counter) {
				$("#tokenCounter").text(counter);
			});
	}
	function loadGoal() {
		window.contract.methods
			.goal()
			.call()
			.then(function (goal) {
				$("#tokenGoal").text(goal);
			});
	}
	function loadWinner() {
		window.contract.methods
			.lastTop1Buyer()
			.call()
			.then(function (winner) {
				if (winner !== "0x0000000000000000000000000000000000000000") $("#tokenWinner1").text(winner);
			});
		window.contract.methods
			.lastTop2Buyer()
			.call()
			.then(function (winner) {
				if (winner !== "0x0000000000000000000000000000000000000000") $("#tokenWinner2").text(winner);
			});
		window.contract.methods
			.lastHitter()
			.call()
			.then(function (winner) {
				if (winner !== "0x0000000000000000000000000000000000000000") $("#tokenHitter").text(winner);
			});
	}
	function loadBlockTime() {
		window.web3.eth.getBlockNumber().then(function (block) {
			$("#tokenBlockTime").text(block);
		});
	}
	function loadReward() {
		window.contract.methods
			.tokensForReward()
			.call()
			.then(function (reward) {
				$("#tokenReward").text(parseCurrency(reward));
			});
	}
	loadTopBuyers();
	loadCounter();
	loadGoal();
	loadWinner();
	loadBlockTime();
	loadReward();

	setInterval(function () {
		loadTopBuyers();
		loadCounter();
		loadGoal();
		loadWinner();
		loadBlockTime();
		loadReward();
	}, 5000);
});
