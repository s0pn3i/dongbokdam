import axios from "axios";
export default function Home({ dam }: any) {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-screen text-6xl">
        <div className="z-10">
          <div>현재 동복댐의 잔수량은</div>
          <span className="font-bold">{dam}%&nbsp;</span>
          <span>입니다.</span>
        </div>
      </div>
      <div className="water"></div>
      <style jsx>{`
        .water {
          width: 100%;
          position: absolute;
          background-color: rgb(96 165 250);
          bottom: 0px;
          box-sizing: border-box;
          z-index: 0;
          animation: water 1s;
          height: ${dam}%;
        }

        @keyframes water {
          from {
            height: 0%;
          }

          to {
            height: ${dam}%;
          }
        }
      `}</style>
    </>
  );
}
export async function getServerSideProps() {
  const {
    data: { dam },
  } = await axios.get("http://localhost:3000/api/getDam");
  return {
    props: { dam },
  };
}
