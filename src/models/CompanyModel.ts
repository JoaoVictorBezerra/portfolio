import type { IBoxSmall } from "@/interfaces/IBoxSmall";

export class CompanyModel implements IBoxSmall {
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

export const grupoVerreschi = new CompanyModel(
  "Grupo Verreschi",
  "01/2022",
  "08/2022",
  "logo_verreschi.png"
);
export const deltaFox = new CompanyModel(
  "Delta Fox Consultoria",
  "08/2022",
  "11/2022",
  "logo_deltafox.svg"
);
export const onebox = new CompanyModel(
  "Onebox Tech",
  "11/2022",
  "Presente",
  "logo_onebox.svg"
);