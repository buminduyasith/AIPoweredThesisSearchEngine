from searchQueryService import SearchByQuery
from abstractScrapingService import GetResearchAbstract
from summerizingService import GetAbstracSummary
from similarityScoreService import calculate_relevance_with_model
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.test
processedData = db.processData
def Search(topic, userid):
    data = []
    searchResults = SearchByQuery(topic)
    abstractList = []
    for i in searchResults:
        print(i["link"])
        abstract = GetResearchAbstract(i["link"])
        summary = GetAbstracSummary(abstract)
        score = calculate_relevance_with_model(topic, summary)
        info = {
                "title": i["title"],
                "authors": i["authors"],
                "link":i["link"],
                "summary": summary,
                "score": score  
            }
        data.append(info)    
    
    processedData.insert_one({"videoId": data, 'userid': userid})
    
    return data

def GetProcessResearchDataByUserId(userId):
    data = processedData.find_one({"userid": userId})
    if data:
        return data
    else:
        return []