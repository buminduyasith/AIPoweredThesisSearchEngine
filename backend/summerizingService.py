import openai

openai.api_key = ""
command = "summarize the research abstract in a concise manner, using between 3 to 5 lines. Your summary should capture the essence of the research and convey its main idea effectively"

def GetAbstracSummary(text):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": f"{command}: {text}"}
        ],
        max_tokens=150
    )

    summary = response['choices'][0]['message']['content']
    print(summary)
    return summary

