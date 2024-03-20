import requests
from bs4 import BeautifulSoup
import json

# URL of the website to scrape
url = "https://www.zomato.com/pune/brahma-pure-veg-sinhgad-road/order"

    # "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36"
headers = {
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
}
# Send a GET request to the URL
response = requests.get(url, headers)

print(response)

# Parse the HTML content of the page
soup = BeautifulSoup(response.content, "html.parser")

# Find all sections with class "sc-eCXBzT jGoFlS"
sections = soup.find_all("section", class_="sc-eCXBzT jGoFlS")

# Initialize a list to store extracted data
data_list = []

# Loop over each section
for section in sections:
    # Extract the name of the item
    name = section.find("h4", class_="sc-1s0saks-15 iSmBPS").text.strip()
    
    # Extract the image URL
    image_url = section.find("img", class_="sc-s1isp7-5 fyZwWD")["src"]
    
    # Check if the item is vegetarian
    veg_element = section.find("div", class_="sc-1tx3445-0 kcsImg sc-1s0saks-0 jcidl")
    is_veg = veg_element is not None and "veg" in veg_element["type"]
    
    # Extract the number of votes
    votes = section.find("span", class_="sc-z30xqq-4 hTgtKb")
    
    # Extract the price
    price = section.find("span", class_="sc-17hyc2s-1 cCiQWA").text.strip()
    
    # Construct a dictionary with extracted data
    item_data = {
        "name": name,
        "image_url": image_url,
        "is_veg": is_veg,
        "votes": votes,
        "price": price
    }

    print(item_data);
    
    # Append the dictionary to the list
    data_list.append(item_data)

# Convert the list of dictionaries to JSON format
json_data = json.dumps(data_list, indent=4)

# Print or save the JSON data
print(json_data)
