import React, { Component } from 'react';
import axiosInstance from '../../axiosInstance'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state={
        posts:[],
        selectedId:null,
        error:false
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
    }

    render () {

        let posts=<p style={{'alignContent':'center'}}>Something Went Wrong !</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
                return <Post key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={()=>this.selectedIdHandle(post.id)} />
            })
        }
  

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost  id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;