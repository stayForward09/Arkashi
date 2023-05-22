import config from "@config/config.json";
import Base from "@layouts/Baseof";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getSinglePage } from "@lib/contentParser";
import icon1 from "../pages/asset/Group.svg"
const { blog_folder } = config.settings;
const options = {
  title: {
      text: 'My chart'
  },
  series: [{
      type: 'line',
      data: [1, 2, 3]
  }],
  chart: {
    backgroundColor:'#00000000',
    borderColor:'#334eff'
  },
  colors: ["#CC6832"]
};

const Home = ({ posts }) => {
  return (
    <Base>
      {/* profile */}
      <div className="section">
        <div className="container">
          <div className="row place-content-center px-36 pt-72 pb-40 h-72">
            <div className="grid grid-cols-2 gap-10 ">
              <div className="flex flex-wrap grid grid-rows-4 gap-5">
                <div className="grid row-span-3">
                  <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                      className="bg-black"
                  />
                </div>
                <div className="border-solid border-2 border-zinc-900 shadow-md rounded-3xl text-lg p-4 py-8 px-4">
                  <div className=" grid grid-cols-2 gap-4">
                    <div className="text-start bold">AKASHI Holders</div>
                    <div className="text-end">0</div>
                    <div className="grid col-span-2 grid-cols-3 ">
                      <button className="  rounded-full primary bg-orange-800 border-inherit h-8 drop-shadow-md w-32 shadow">
                        <div className="flex place-content-center  justify-center">
                          <img className="pr-2" src="/images/Group.svg"/>
                          <div>
                            Buy
                          </div>
                        </div>
                      </button>
                      <button className="  rounded-full primary bg-orange-800 border-inherit h-8 drop-shadow-md w-32 shadow">
                        <div className="flex place-content-center  justify-center">
                          <img className="pr-2" src="/images/icon1.svg"/>
                          <div>
                            Burn
                          </div>
                        </div>
                      </button>
                      <button className="  rounded-full primary bg-orange-800 border-inherit h-8 drop-shadow-md w-32 shadow">
                        <div className="flex place-content-center  justify-center">
                          <img className="pr-2" src="/images/icon2.svg"/>
                          <div>
                            Supply
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap grid grid-rows-4 gap-5">
                <div className="border-solid border-2 border-zinc-900 shadow-md  rounded-3xl p-8 py-8">
                  <div className=" grid grid-cols-2 grid-rows-2 text-lg gap-4">
                    <div className="text-start">Total-Supply</div>
                    <div className="text-end">500000000000000000000</div>
                    <div className="text-start">Liquid Supply</div>
                    <div className="text-end">1500000000000000000</div>
                  </div>
                </div>
                <div className="grid row-span-2 border-solid border-2 border-zinc-900 shadow-md rounded-3xl px-8 py-12">
                  <div className=" grid grid-cols-2 text-lg gap-2">
                      <div className="text-start">Total-Liquidity</div>
                      <div className="text-end">$500,000</div>
                      <div className="text-start">Treasury</div>
                      <div className="text-end">500000000000000000</div>
                      <div className="text-start">AKASHI Burned</div>
                      <div className="text-end">2000,000</div>
                      <div className="text-start">Rewards Distributed</div>
                      <div className="text-end">500000000000000000</div>
                  </div>
                </div>
                <div className="border-solid border-2 border-zinc-900 shadow-md rounded-3xl p-8 py-8 ">
                  <div className=" grid grid-cols-2 text-lg gap-4">
                    <div className="text-start">AKASHIx Minted</div>
                    <div className="text-end">0</div>
                    <div className="text-start">AKASHIx Stacked</div>
                    <div className="text-end">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  return {
    props: {
      posts: posts,
    },
  };
};
