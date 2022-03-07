// Post Component
import Kudos from "../Kudos";
import { string } from "prop-types";
import { array } from "prop-types";
import { number } from "prop-types";
import {useEffect, useState} from "react";
import * as postService from "../../api/post.service";
import CommentForm from "../CommentForm";

function Post(props) {

	const [firstName, setFirstName] = useState("");
	const [zodiacSign, setZodiacSign] = useState("");

	const getAuthor = async () => {
		await postService.getOne(`${props.id}`).then((res) => {
			setFirstName(res.data.data.user.firstName)
			setZodiacSign(res.data.data.user.zodiacSign)
		})
	}

	useEffect(()=> {
		getAuthor()
	}, [])

	return (
		<>
			<h1>Title: {props.title}</h1>
			<div>{firstName? <p>By: {firstName}</p>: null}
			{/* <p>By: {firstName}</p> */}
			<img alt={zodiacSign} style={{width:"75px", height: "auto", borderRadius:"30px"}} 
                        src={`/signs/${zodiacSign}.webp`}/>
			</div>
			<div>
				<p>{props.body}</p>
				{props.comments.map(comment => (
					<p key={comment._id}>{comment.body}</p>
                ))}
                {/* <p>{props.kudos}</p> */}
			</div>
			<div>
				<Kudos kudos={props.kudos}/>
			</div>
				<CommentForm 
					user={props.user} 
					post={props.id} 
					refreshPosts={() => {props.refreshPosts()} }
				/>
		</>
	);
}

Post.propTypes = {
	title: string.isRequired,
    // not sure how to reference user here
	user: string.isRequired,
    // user: { type: Schema.Types.ObjectId, ref: "User" },
	body: string.isRequired,
    comments: array,
    kudos: number
};

export default Post;