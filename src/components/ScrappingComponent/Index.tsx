import axios from "axios";
import { Cheerio } from "cheerio";
import React, { useEffect, useState } from "react";

const ScrapingComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url =
                    "https://www.zomato.com/pune/brahma-pure-veg-sinhgad-road/order";
                const response = await axios.get(url);

                // Create a parser object to parse the HTML response
                const parser = new DOMParser();
                const htmlDocument = parser.parseFromString(
                    response.data,
                    "text/html"
                );
                

                // Extract information from the parsed HTML
                const sections = htmlDocument.querySelectorAll(
                    "section.sc-eCXBzT.jGoFlS"
                );
                const extractedData: any = [];

                sections.forEach((section: any) => {
                    const name: any = section
                        .querySelector("h4.sc-1s0saks-15.iSmBPS")
                        .textContent.trim();
                    const image_url: any = section
                        .querySelector("img.sc-s1isp7-5.fyZwWD")
                        .getAttribute("src");
                    const is_veg: any =
                        section.querySelector(
                            "div.sc-1tx3445-0.kcsImg.sc-1s0saks-0.jcidl"
                        ) !== null;
                    const votes: any = section
                        .querySelector("span.sc-z30xqq-4.hTgtKb")
                        .textContent.trim();
                    const price: any = section
                        .querySelector("span.sc-17hyc2s-1.cCiQWA")
                        .textContent.trim();

                    extractedData.push({
                        name,
                        image_url,
                        is_veg,
                        votes,
                        price,
                    });
                });

                setData(extractedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // fetchData();
    }, []);

    return (
        <div>
            {/* Render the extracted data */}
            <h4>This is scrapper</h4>
        </div>
    );
};

export default ScrapingComponent;
