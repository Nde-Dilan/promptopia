import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET (read)
export const GET = async (request, {params})=>{

    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id);

        if(!prompt) return new Response("Prompt not found",{status:404});

        return new Response(JSON.stringify(prompt),{status:200});
    } catch (error) {
        return new Response("Failled to fetch all prompts "+error,{status:500});
    }
}

//PATCH (update)

export const PATCH = async (request, {params})=>{
    const {prompt, tag } = await request.json();

    try {
        await connectToDB();
                /*
        new: true ensures that the method returns the modified document rather than the original one.
        When new is set to true, the updatedPrompt variable will hold the document after the update is applied. If set to false or omitted, it would hold the original document before the update */
        const updatedPrompt = await Prompt.findByIdAndUpdate(params.id, { prompt, tag }, { new: true });

        if (!updatedPrompt) {
            return new Response("Prompt not found when trying to update", { status: 404 });
        }
        return new Response(JSON.stringify(updatedPrompt),{status:200});
    } catch (error) {
        return new Response("Action failled when trying to update",{status:500});
    }
}


//DELETE (delete)
export const DELETE = async (request, {params}) =>{

    try {
        await connectToDB();

        await Prompt.findByIdAndDelete(params.id);
        return new Response("Prompt deleted successfully", { status: 200 });

    } catch (error) {
        return new Response("Failed to delete prompt "+error, { status: 404 });
    }
}
