import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <TailSpin
        visible={true}
        height="180"
        width="180"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
