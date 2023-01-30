# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) defining the class and inheriting from the Application Controller
class BlogPostsController < ApplicationController
  def index
    # ---2) the index method makes an Active Record call that will save all the content from the database as an instance variable.
    @posts = BlogPost.all
  end

  # ---3) the show method looks for one item in tbe database by accessing the id of the item. The Active Record call will find one item by id. This id will come from the url params.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Allows users to be able to add information to web application that is then stored in the database. New displays the form for the user.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create is a RESTful route that submits user data to the database. The Active Record create action will call the strong params method. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit method allows edits to be made to an item by accessing the id of the item a and redners the edit template.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) its updating the info and if it is valid it will redirect you.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The destroy action removes content from the database and redirecting the user.
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is a keyword in Ruby that restricts the scope of where a method can be called. Once the keyword private is implemented, everything below the keyword is included in its protection.
  private
  def blog_post_params
    # ---10) Strong params have two methods: require and permit. The require method requires the  attributes to be present in the create or update methods. The permit method allows certain items to be present but if they are not present, that is still okay. 
    
    params.require(:blog_post).permit(:title, :content)
  end
end
