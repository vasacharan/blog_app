import React from 'react';

const CreateBlog = () => {
  return (
    <div>
    <div className='d-flex justify-content-center mt-4'>
        <div className='card w-50'style={{backgroundColor:'#c4c1e0'}}>
        <div className='card-body text-start'>
        <h2 className='text-center fst-italic'>Create Blog</h2>

            <label for="exampleFormControlInput1" class="form-label">Topic</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select a Topic</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <br />
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label ">Title</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title of blog" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Blog Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CreateBlog;