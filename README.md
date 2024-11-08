# Analysis of Chip Huyen's "llama-police" collection

In her blogpost, ["Building A Generative AI Platform"](https://huyenchip.com//2024/07/25/genai-platform.html),  Chip Huyen describes an idealized GenAI-driven application.  She later compiled a [large list](https://huyenchip.com/llama-police.html) (1,000+) of projects available in github that have to do with building such applications.  Here, I'm going over that list to understand her classification, and cannibalize it to build an "LLM Stack" landscape.

## Recommended use of this repository

Fork (not clone) this repository and start a github codespace on it.  This installs the dependencies and the dataset. When the Visual Studio Code interface pops up, in the bottom panel, in the "Ports" tab, you'll see many forwarded ports start to appear.  Locate "8888" (usually at the top of the list) and click on the "globe" icon.  This will bring up a jupyter lab instance in a new browser tab.  From there you can run the included notebook.

## In progress

I'm trying to transform the notebook into a dashboard, to facilitate the task of "recoding" the entries in Chip's list to our proposed taxonomy.  Currently there's a very simple custom tree-selector widget to choose category/subcategory to filter the original dataset.  I need to add a UI for the generated yaml-formatted file with our variants so that we can submit it to the CNCF landscape visualization system.

## References

* https://huyenchip.com/2024/03/14/ai-oss.html
* https://huyenchip.com/communication/
* https://github.com/stars/chiphuyen/lists/cool-llm-repos
