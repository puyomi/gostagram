from django.urls import path
from . import views



app_name = "users"
urlpatterns = [
    path("", view=views.ExploreUsers.as_view(), name="list"),
    path("explore/", view=views.ExploreUsers.as_view(), name="explore_users"),
    path("search/", view=views.SearchUser.as_view(), name="search_user"),
    path("<int:user_id>/follow/", view=views.FollowUser.as_view(), name="follow_user"),
    path("<int:user_id>/unfollow/", view=views.UnFollowUser.as_view(), name="unfollow_user"),
    path("<str:username>/", view=views.UserProfile.as_view(), name="user_profile"),
    path("<str:username>/password/", view=views.ChangePassword.as_view(), name="change_password"),
    path("<str:username>/followers/", view=views.UserFollowers.as_view(), name="user_followers"),
    path("<str:username>/following/", view=views.UserFollowing.as_view(), name="user_following"),
    path("login/facebook/", view=views.FacebookLogin.as_view(), name='fb_login'),    
]
