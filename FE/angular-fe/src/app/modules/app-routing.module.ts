import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { AboutComponent } from "../pages/about/about.component";
import { PostsComponent } from "../pages/posts/posts.component";
import { AlbumComponent } from "../pages/album/album.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'posts',component:PostsComponent},
    {path:'albums',component:AlbumComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}