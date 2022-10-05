import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('Phone');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1> Create new Ticket </h1>
        <p>Fill out the form</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            disabled
          ></input>
          <label htmlFor='email'>Customer Email</label>
          <input
            type='text'
            className='form-control'
            value={email}
            disabled
          ></input>
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='Phone'>Phone</option>
              <option value='Notebook'>Notebook</option>
              <option value='Monitor'>Monitor</option>
              <option value='Keyboard'>Keyboard</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
