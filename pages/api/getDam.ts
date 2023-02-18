// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cheerio from "cheerio";

type Data = {
  dam: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const html = await axios.get(
    "http://water.gwangju.go.kr/program/quality/new_quality_main_iframe_v2.jsp"
  );
  const $ = cheerio.load(html.data);

  const text = $(
    "html body div div#tab1.tabcontent div.tab_box div.today_wrap_dam div.section_al ul li:nth-child(1)"
  ).text();

  const dam = Number(text.split(":")[1].slice(1, 6));
  res.status(200).json({ dam });
}
