import type { IBoxSmall } from "@/interfaces/IBoxSmall";

export class Company implements IBoxSmall {
  companyName: string;
  initialDate: string;
  finishDate: string;
  image: string;

  constructor(
    companyName: string,
    initialDate: string,
    finishDate: string,
    image: string
  ) {
    this.companyName = companyName;
    this.initialDate = initialDate;
    this.finishDate = finishDate;
    this.image = image;
  }
}
