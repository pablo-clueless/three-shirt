import { Configuration, CreateImageRequest, OpenAIApi } from "openai"

const config = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
})

const openai = new OpenAIApi(config)

export const generateImage = async(prompt: string) => {
  const params: CreateImageRequest = {
    prompt,
    n: 1,
    response_format: "b64_json",
    size: "1024x1024",
  }

  const response = await openai.createImage(params)
  return response.data.data[0].b64_json
}
