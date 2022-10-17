import { useWeb3React } from "@web3-react/core";
import {
  GetApprove,
  GetHardCapStatus,
  GetIcoStatus,
  SaleICOToken,
  SaleICOTokenBYEtherumData,
  sellICOTokenEth,
  Position,
  sellICOTokenETh,
  sellICOTokenUSDT,
  GetRefundstatus,
  getWalletBalance,
  GetTokonomicStatus,
} from "../Utils/contractHelper";
import axios from "axios";
import { USDTTokenAddress } from "../config/Contracts/contract";
import Swal from "sweetalert2";
import Web3 from "web3";
import { USDT_ABI } from "../config/ABI/USDT_ABI";
import { useEffect, useState } from "react";
import useCardTransaction from "../hooks/useCardTransaction";

function PurchaseMetacade() {
  const [showModal, setShowModal] = useState(false);
  const { initCardTransaction } = useCardTransaction();
  const [tokenomics, setTokenomics] = useState("");
  const [error, setError] = useState("");
  const { library, account, active, activate } = useWeb3React();
  const [number_of_tokens, setnumber_of_tokens] = useState("");
  const [_numberOfTokens, set_numberOfTokens] = useState("");
  const [Eth, set_ETh] = useState("");
  const [position, setPosition] = useState("");
  const [isHardCapReached, setIsHardCapReached] = useState("");
  const [isSoftCapReached, setIsSoftCapReached] = useState("");
  const [isRefundCalled, setIsRefundCalled] = useState("");
  const [isIcoOver, setIsIcoOver] = useState("");
  const [ETHWalletBalance, setETHWalletBalance] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (active) {
      await getWalletBalance(library.provider, account).then((res) =>
        setETHWalletBalance(parseInt(res) / Math.pow(10, 18))
      );
      setTokenomics(await GetTokonomicStatus(library.provider));

      Position(library.provider)
        .then((res) => {
          console.log(res);
          setPosition(res / Math.pow(10, 18));
        })
        .catch((err) => {
          console.log(err);
        });
      setIsRefundCalled(await GetRefundstatus(library.provider));
      setIsSoftCapReached(await GetRefundstatus(library.provider));
      setIsHardCapReached(await GetHardCapStatus(library.provider));
      setIsIcoOver(await GetIcoStatus(library.provider));
    }
  }, [active]);

  async function getFinalPrice(_currentPosition, _number_of_tokensOfTokens) {
    let presaleRate = [
      8000000000000000, 10000000000000000, 12000000000000000, 13000000000000000,
      14000000000000000, 15500000000000000, 17000000000000000,
      18500000000000000, 20000000000000000,
    ];
    let finalPrice = 0;
    for (
      let i = _currentPosition;
      i < _currentPosition + _number_of_tokensOfTokens;
      i++
    ) {
      if (i >= 0 && i <= 140000000) {
        finalPrice += presaleRate[0];
      } else if (i > 140000000 && i <= 140000000 + 157500000) {
        finalPrice += presaleRate[1];
      } else if (i > 140000000 + 157500000 && i <= 140000000 + 157500000 * 2) {
        finalPrice += presaleRate[2];
      } else if (
        i > 140000000 + 157500000 * 2 &&
        i <= 140000000 + 157500000 * 3
      ) {
        finalPrice += presaleRate[3];
      } else if (
        i > 140000000 + 157500000 * 3 &&
        i <= 140000000 + 157500000 * 4
      ) {
        finalPrice += presaleRate[4];
      } else if (
        i > 140000000 + 157500000 * 4 &&
        i <= 140000000 + 157500000 * 5
      ) {
        finalPrice += presaleRate[5];
      } else if (
        i > 140000000 + 157500000 * 5 &&
        i <= 140000000 + 157500000 * 6
      ) {
        finalPrice += presaleRate[6];
      } else if (
        i > 140000000 + 157500000 * 6 &&
        i <= 140000000 + 157500000 * 7
      ) {
        finalPrice += presaleRate[7];
      } else if (
        i > 140000000 + 157500000 * 7 &&
        i <= 140000000 + 157500000 * 8
      ) {
        finalPrice += presaleRate[8];
      }
    }

    console.log("USDT AMount  : ", finalPrice);
    console.log("USDT AMount  : ", finalPrice / 10 ** 18);

    return finalPrice;
  }

  const handleInputEth = (e) => {
    let pattern = /^[0-9\b]+$/;
    if (e.target.value.match(pattern)) {
      console.log("yess");
      set_numberOfTokens(e.target.value);
    } else {
      set_numberOfTokens("");
      setError("Please input positive values");
    }
    console.log(e.target.value, "This iks input value");
  };
  const handleInputBNB = (e) => {
    let pattern = /^[0-9\b]+$/;
    if (e.target.value.match(pattern)) {
      console.log("yess");
      set_ETh(e.target.value);
    } else {
      set_ETh("");
      setError("Please input positive values");
    }
    console.log(e.target.value, "This iks input value");
  };
  const TokenSaleByUSDT = async () => {
    console.log("Token Buy with USDT called");
    console.log(JSON.stringify(isIcoOver), "Is Ico Over ");

    const d = new Date();
    let curretTime = parseInt(d.getTime() / 1000);
    let startTime = tokenomics[3];
    let EndTime = tokenomics[4];
    let SoldOutTokens = tokenomics[5];
    let hardcap = tokenomics[8];
    // console.log(curretTime, "Current Time ");
    // console.log(startTime, "startTime Time ");
    // console.log(EndTime, "EndTime Time ");
    // console.log(isRefundCalled, "Is Refund Done ");
    // console.log(_numberOfTokens, "Number of Tokens by input filed");
    // console.log(SoldOutTokens, "This is the soldouttoken");
    // console.log(hardcap / Math.pow(10, 18), "This is the hardcape");

    if (active) {
      if (isIcoOver) {
        Swal.fire("Warning", "ICO is already Over", "warning");
      } else if (_numberOfTokens == 0 && _numberOfTokens == "") {
        Swal.fire("Warning", "Please Input valid number", "warning");
      } else if (curretTime < startTime) {
        Swal.fire("Warning", "ICO Not Started Yet", "warning");
      } else if (isRefundCalled) {
        Swal.fire("Warning", "You have initiated Refund already.", "warning");
      } else if (
        parseInt(SoldOutTokens) + parseInt(_numberOfTokens) >
        hardcap
      ) {
        Swal.fire("Warning", "This transaction may exceed Hardcap.", "warning");
      } else {
        const data = await getFinalPrice(position, parseInt(_numberOfTokens));
        console.log(data, "this is the api code", position, "this is positon");
        GetApprove(library.provider, _numberOfTokens, USDTTokenAddress)
          .send({
            from: account,
          })
          .then(() => {
            sellICOTokenUSDT(library.provider, _numberOfTokens, data)
              .send({
                from: account,
              })
              .then(() => {
                setnumber_of_tokens("");
                Swal.fire("Transaction is succesfull");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      Swal.fire("Please Connect To The Wallet");
    }
  };
  const TokenSaleByETH = async () => {
    console.log("Token Buy with USDT called");
    console.log(isIcoOver, "Is Ico Over ");

    const d = new Date();
    let curretTime = parseInt(d.getTime() / 1000);
    let startTime = tokenomics[3];
    let EndTime = tokenomics[4];
    let SoldOutTokens = tokenomics[5];
    let hardcap = tokenomics[8];

    if (active) {
      if (isIcoOver) {
        Swal.fire("Warning", "ICO is already Over", "warning");
      } else if (Eth === 0 && Eth === "") {
        Swal.fire("Warning", "Please Input valid number", "warning");
      } else if (curretTime < startTime) {
        Swal.fire("Warning", "ICO Not Started Yet", "warning");
      } else if (isRefundCalled) {
        Swal.fire("Warning", "You have initiated Refund already.", "warning");
      } else if (
        parseInt(SoldOutTokens) + parseInt(_numberOfTokens) >
        hardcap
      ) {
        Swal.fire("Warning", "This transaction may exceed Hardcap.", "warning");
      } else {
        // const data = await getFinalPrice(position, _numberOfTokens);
        // console.log(data, "this is the api code");
        let liveEth_to_USDT = await axios.get(
          "https://cex.io/api/last_price/" + "ETH" + "/USD"
        );
        console.log(liveEth_to_USDT.data.lprice);
        console.log("(position, Eth)", position, Eth);
        const usdtAmount = await getFinalPrice(
          parseInt(position),
          parseInt(Eth)
        );
        console.log(
          parseInt(position),
          parseInt(Eth),
          usdtAmount,
          liveEth_to_USDT.data.lprice,
          "Position, Eth, USDTAmuount, liveEth_to_USDT"
        );

        let finalValue =
          (parseInt(usdtAmount) /
            Math.pow(10, 18) /
            parseFloat(liveEth_to_USDT.data.lprice)) *
          Math.pow(10, 18);

        console.log(
          "FInal Vlae : ",
          parseInt(finalValue)
          // new Web3().utils.toWei(finalValue.toString(), "ether")
        );

        console.log(
          "usdtAmount / (liveEth_to_USDT.data.lprice * Math.pow(10, 18));",
          (parseFloat(usdtAmount) / parseFloat(liveEth_to_USDT.data.lprice)) *
            Math.pow(10, 18)
        );

        sellICOTokenEth(library.provider, liveEth_to_USDT.data.lprice, Eth)
          .send({
            from: account,
            value: parseInt(finalValue),
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      Swal.fire("Please Connect To The Wallet");
    }
  };

  return (
    <>
      <div className="bg-[#b231c4]">
        <div
          className={` bg-auto bg-[url(${
            process.env.PUBLIC_URL + "/assets/images/new/black-dots-down.png"
          })] h-[80px] bg-center`}
        ></div>
        <div className="pt-[60px] pb-[20px] ">
          <h2 className="text-3xl text-black">PURCHASE METACADE</h2>
          <div className="max-w-[1300px] mx-auto flex-column md:flex my-[100px] justify-center gap-10">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/imagecc.png"}
              onClick={initCardTransaction}
              className="cursor-pointer max-w-[400px] w-full mx-auto mb-5 "
              alt=""
            />
            <div className="flex gap-5  flex-col justify-between">
              <BuyETH
                TokenSaleByETH={TokenSaleByETH}
                handleInputEth={handleInputBNB}
              />
              <BuyUSDT
                TokenSaleByUSDT={TokenSaleByUSDT}
                handleInputUSDT={handleInputEth}
              />
            </div>
            {/* <BuyUSDT
              TokenSaleByUSDT={TokenSaleByUSDT}
              handleInputUSDT={handleInputEth}
            /> */}
          </div>
        </div>
        <div
          className={` bg-auto bg-[url(${
            process.env.PUBLIC_URL + "/assets/images/new/black-dots-up.png"
          })] h-[80px] bg-center`}
        ></div>
      </div>
    </>
  );
}

const BuyETH = ({ TokenSaleByETH, handleInputEth }) => {
  return (
    <>
      <div className="md:max-w-[500px] w-full px-[10px]  mx-auto">
        {" "}
        <h2 className="mb-0 uppercase text-white text-3xl bg-[#005ec3] rounded-t-lg py-3 ">
          {" "}
          Buy with ETH
        </h2>
        <div className="border-2 m-0 border-[#005ec3]"></div>
        <div
          className={`  py-[20px] md:px-[100px] rounded-b-md border-2 border-white border-t-0    bg-[url(${
            process.env.PUBLIC_URL + "assets/images/new/dot-back.png"
          })]`}
        >
          <div class="gap-2 flex items-center bg-white rounded-lg py-1 px-2">
            <input
              id="ETH"
              class="bg-transparent  py-4 font-bold  outline-0 goshareg"
              name="ETH"
              type="text"
              placeholder="0.0"
              onChange={handleInputEth}
              style={{ fontWeight: "bold", fontSize: "16px" }}
              defaultValue={0.0}
            />
            <div className="font-bold">ETH</div>
          </div>
          <div className="text-[#656464] font-bold  my-3 text-right">
            0.1 ETH = 16,550 MCADE
          </div>

          <div className="flex justify-end">
            {" "}
            <div
              onClick={TokenSaleByETH}
              className="cursor-pointer  bitfont inline-block px-[20px] py-[10px] items-center justify-center bg-[#be25bf] rounded-lg py-1 px-2 border-2 text-white text-center  mx-auto md:m-0 "
            >
              BUY MCADE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const BuyUSDT = ({ TokenSaleByUSDT, handleInputUSDT }) => {
  return (
    <>
      <div className="md:max-w-[500px] w-full borderimg2 mx-auto w-full">
        {" "}
        <h2 className="mb-0 uppercase text-white text-3xl py-3 bg-[#f66329]">
          {" "}
          Buy with USDT
        </h2>
        <div id="#borderimg2" className="border-2 m-0 border-[#ff6837]"></div>
        <div
          className={`py-[20px] md:px-[100px] rounded-b-md border-2 border-white border-t-0    bg-[url(${
            process.env.PUBLIC_URL + "assets/images/new/dot-back.png"
          })]`}
        >
          <div class="gap-2 flex items-center bg-white rounded-lg py-1 px-2">
            <input
              id="USDT"
              class="bg-transparent  py-4 font-bold  outline-0 goshareg font-bold"
              name="USDT"
              type="text"
              placeholder="0.0"
              defaultValue={0.0}
              onChange={handleInputUSDT}
            />
            <div className="font-bold">USDT</div>
          </div>
          <div className="text-[#656464] font-bold  my-3 text-right">
            0.1 USDT = 125 MCADE
          </div>

          <div className="flex justify-end">
            {" "}
            <div
              onClick={TokenSaleByUSDT}
              className="cursor-pointer bitfont inline-block px-[20px] py-[10px] items-center justify-center bg-[#be25bf] rounded-lg py-1 px-2 border-2 text-white text-center  mx-auto md:m-0 "
            >
              BUY MCADE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseMetacade;
