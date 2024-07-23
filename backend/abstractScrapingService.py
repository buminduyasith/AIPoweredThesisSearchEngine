from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def GetResearchAbstract(url):
    driver = webdriver.Chrome()
    driver.get(url)
    
    time.sleep(2)
    items = driver.find_elements(By.CLASS_NAME, "research-detail-middle-section__abstract")
    for item in items:
        try:
            # Find title and link

            print(item.text)
            return item.text
        except Exception as e:
            print(f"Error processing item: {e}")
            print("")



    # Close the driver
    driver.quit()
