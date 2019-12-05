import auth0 from "../../../lib/auth0";
import manager from "../../../lib/manager";
import fetch from "isomorphic-unfetch";

export default async function me(req, res) {
    try {
        let post = await fetch("http://localhost:8000/api/v1/users")
            .then(response => response.json())
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
        res.json({ data: post });
    } catch (error) {
        res.end(error);
    }
}