import { NextResponse } from "next/server";
import * as cheerio from 'cheerio';


export async function GET() {
    const data = await fetch("https://www.levels.fyi/jobs/location/united-kingdom?from=subnav&postedAfterTimeType=days&postedAfterValue=7&searchText=software+engineer&jobId=103126329490055878", {
        method: "GET",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        }
    })
    const json = await data.text()
    const $ = cheerio.load(json);
    const links = $('a').map((i, link) => link.attribs.href).get();
    return NextResponse.json({ links });
}
