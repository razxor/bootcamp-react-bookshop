import React from 'react'
import books from '../../book.json'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import ROUTES from '../routes';

export const Book = () => {
    console.log(books);
    return (
        <section id='Book' className='w-4/5 mx-auto pb-9'>
            <div className="heading text-center py-6">
                <h1 className='text-6xl font-bold'>Books</h1>
                {/* <p className='py-2'>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p> */}
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map((book, i) => {
                        let tags = book.tags;
                        return (
                            <div className="col-span-1" key={i}>
                                <Link to={ROUTES.SINGLE_BOOK.DYNAMIC(book.bookId)}>
                                    <div className="card bg-base-100 shadow-xl w-full rounded h-96">
                                        <figure>
                                            <img
                                                src={`${book.image}`}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body p-5">
                                            <div className="grid lg:grid-cols-3 justify-center">
                                                <div className="col-span-2">
                                                    <h2 className="card-title">
                                                        {book.bookName}
                                                    </h2>
                                                    <p>
                                                        <i class="fa-solid fa-user-tie"></i> {book.author}
                                                    </p>
                                                </div>
                                                <div className="col-span-1 text-end flex flex-col justify-center items-end">
                                                    <Rating
                                                        emptySymbol="far fa-star text-orange-500"
                                                        fullSymbol="fas fa-star text-orange-500"
                                                        fractions={2}
                                                        initialRating={book.rating}
                                                        readonly
                                                    //onChange={(rate) => console.log(rate)}
                                                    />
                                                    <div className="badge badge-accent badge-outline py-2 my-2">{book.category}</div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 justify-between items-center gap-5">
                                                <div className="col-span-3 lg:col-span-3 flex gap-5">
                                                    {
                                                        tags.map((tag, i) => {
                                                            return (
                                                                <div className="badge badge-secondary  badge-outline" key={i}>{tag}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="col-span-3 lg:col-span-3">
                                                    <Link className="btn btn-outline rounded-full btn-success w-full" to={ROUTES.SINGLE_BOOK.DYNAMIC(book.bookId)}>
                                                    <i className="fa-regular fa-eye"></i> Book Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
