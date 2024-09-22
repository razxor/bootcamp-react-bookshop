import React from 'react'
import books from '../../book.json'

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
                    books.map((book) => {
                        return (
                            <div className="col-span-1">
                                <div className="card bg-base-100 shadow-xl w-full rounded h-96">
                                    <figure>
                                        <img
                                            src={`${book.image}`}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Shoes!
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Fashion</div>
                                            <div className="badge badge-outline">Products</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
