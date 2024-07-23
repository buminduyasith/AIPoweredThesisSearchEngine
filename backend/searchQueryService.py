from selenium import webdriver
from selenium.webdriver.common.by import By

def SearchByQuery(query):
    driver = webdriver.Chrome()
    url = "https://www.researchgate.net/search/publication?q="+ query.replace(" ", "+")
    driver.get(url)

    items = driver.find_elements(By.CLASS_NAME, "nova-legacy-o-stack__item")

    results = []

    for item in items:
        try:
            title_element = item.find_element(By.CLASS_NAME, "nova-legacy-v-publication-item__title")
            title = title_element.text.strip()
            article_link = title_element.find_element(By.TAG_NAME, "a").get_attribute("href")
            
            authors_elements = item.find_elements(By.CLASS_NAME, "nova-legacy-v-person-inline-item__fullname")
            authors = [author.text.strip() for author in authors_elements]

            item_info = {
                "title": title,
                "link": article_link,
                "authors": authors
            }
            
            results.append(item_info)

        except Exception as e:
            #print(f"Error processing item: {e}")
            print("")
    driver.quit()
    return results
