import {  NextRequest } from "next/server";
import { comments } from "./data"

export async function GET(req){
    const query = req.nextUrl.searchParams;
    const searchText = query.get('query'); 
    
    if (searchText !== null) {
        const filteredComments = comments.filter(comment =>
            comment.text.toLowerCase().includes(searchText.toLowerCase())
        );
        return Response.json(filteredComments);
    }
    return Response.json(comments);
}

export async function POST(req){
    const response = await req.json();
    const newComment = {
        id:comments.length+1,
        text:response.text
    }
    comments.push(newComment);
    return Response.json({"send":comments});
}


export async function PUT(req){
    const response = await req.json();
    // comments[response.id];
    // console.log(response);
    // comments[response.id].text=response.text
    
    const index = comments.findIndex(it => it.id == response.id);
  
    if(index == -1)
        return Response.json("No such user found");
    comments[index].text= response.text

    return Response.json({"Updated":comments});
}

export  const DELETE = async (req) =>{
    const res = await req.json();

    const index= comments.findIndex(it => it.id == res.id);
    console.log(index);
    
    if(index == -1)
        return Response.json("No such user found");
    const updatedComments = comments.filter(it => it.id !== index);
    
    // comments.splice(index,1);
    return Response.json({"Updated":comments});
}