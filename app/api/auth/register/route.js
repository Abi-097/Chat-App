import { connectToDB } from "@mongodb";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const body = await req.json();
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};
