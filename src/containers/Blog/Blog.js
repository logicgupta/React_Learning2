import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts';
import './Blog.css';
import {Route,NavLink,withRouter,Switch,Redirect} from 'react-router-dom'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent';
import FullPost from './FullPost/FullPost'


const AysncNewPost=asyncComponent(()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {

     // Relative Path    // By Default absolute path -->    pathname:'/new-post'   // Study It 
    componentDidUpdate(){
        console.log(this.props);
    }                                

    render () {
        return (
            <div>
                <header className="Blogs">
                    <nav>
                        <ol>
                            <li><NavLink to="/" exact
                            activeClassName='active-styles'
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}
                            
                            >Home</NavLink></li>
                            <li><NavLink  to={
                                {
                                    pathname:'/new-post',     
                                    hash:'#submit',   
                                    search:'?quick-submit=true'
                                }
                            }>New Posts</NavLink></li>
                        </ol>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1> Logic</h1>}></Route> */}
               <Switch>
               <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={AysncNewPost}/>
                <Route path="/posts/:id" exact component={FullPost}/>
                <Redirect from="/" to ="/new-post"/> 
         
               </Switch>
               
                  </div>
        );
    }
}

export default withRouter(Blog); 