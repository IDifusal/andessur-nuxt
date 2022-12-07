import { collection, getDocs } from "firebase/firestore";
import { db } from "~/plugins/firebase.js";

export const state = ()=>({
    posts:[]
})
export const mutations = {
    SET_BLOG(state,data){
        state.posts = data
    }  
}
export const getters ={
    getPosts(state){
        return state.posts
    },
    getSinglePost(state,data){
        return state.posts.find((x)=> x.slug == data)
    }
}
export const actions ={
    async nuxtServerInit ({commit}){
        const querySnapshot = await getDocs(collection(db, "blog"));
        let content = [];
        querySnapshot.forEach((doc) => {
          content.push(doc.data());
        });
        commit('SET_BLOG',content)
    }
}