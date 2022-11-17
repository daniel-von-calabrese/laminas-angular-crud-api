import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [
	{ path: '', redirectTo: 'post', pathMatch: 'full' },
	{ path: 'post', component: PostsListComponent },
	{ path: 'post/:id', component: PostDetailsComponent },
	{ path: 'add', component: AddPostComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }