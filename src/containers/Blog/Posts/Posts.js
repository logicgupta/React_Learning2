import React,{ Component } from "react"
import axiosInstance from '../../../axiosInstance'
import Post from '../../../components/Post/Post'
import {Link} from 'react-router-dom'


class Posts extends Component{


    state={
        posts:[],
        selectedId:null,
        error:false
    }
     //*******/
        // Don't use any string with the console.log . It will not return correct
    componentDidUpdate(){    
       
        console.log(this.props);
    }

    componentDidMount(){
        
        axiosInstance.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{

            const posts=response.data.slice(0,4);
            const updatedPost=posts.map(post=>{
                        return {
                            ...post,
                            author:'Max'
                        }
            })

            this.setState({posts:updatedPost})
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
            this.setState({error:true});
        })
    }


    selectedIdHandle=(id)=>{
        this.setState({selectedId:id});
        //Navigating to post
//         this.props.history.push('/posts/'+id);
}

    render(){
        let posts=<p style={{'alignContent':'center'}}>Something Went Wrong !</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
                return <Link key={post.id}  to={'/posts/'+post.id}>
                    <Post key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={()=>this.selectedIdHandle(post.id)} />
                </Link>
            });
        }

        return(
            <section>
                {posts}
            </section>
        );
    }

}
export default Posts;