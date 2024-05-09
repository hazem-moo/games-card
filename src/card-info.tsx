import { CSSProperties } from "react";
import { DataProos } from "./container/types";
import Image from "next/image";

type STYLE = {
  css: CSSProperties;
};
const CardInfo = ({ id, front, back, key }: DataProos) => {
  if (typeof window !== "undefined") {
    let allCards = document.querySelectorAll(".card");
    let one: any = "";
    let twe: any = "";
    let canClick: boolean = true;
    let finish: number = 0;

    allCards.forEach((card) => {
      if (!canClick) return;
      card.addEventListener("click", (e: any) => {
        // remove class flip
        if (e.currentTarget.classList.contains("flip")) return;
        e.currentTarget.classList.add("flip");

        if (!one) one = e.currentTarget;
        else if (!twe) twe = e.currentTarget;

        let img1 = one ? one.firstElementChild.src : "";
        let img2 = twe ? twe.firstElementChild.src : "";

        if (img1 === img2) {
          one.classList.add("hidden");
          twe.classList.add("hidden");
          one = "";
          twe = "";
          finish++;
          if (finish === 6) {
          }
        } else if (img1 && img2) {
          canClick = false;
          let stop = setInterval((): any => {
            one.classList.remove("flip");
            twe.classList.remove("flip");
            one = "";
            twe = "";
            clearInterval(stop);
            canClick = true;
          }, 1500);
        }
      });
    });

    allCards.forEach((el: any) => {
      let rendBox = Math.ceil(Math.random() * 12);
      el.style.order = rendBox;
    });
  }
  return (
    <>
      <div className="card" key={key}>
        <Image width={50} height={50} alt="" src={front} className="front" />
        <Image width={50} height={50} alt="" src={back} className="back" />
      </div>
    </>
  );
};

export default CardInfo;
