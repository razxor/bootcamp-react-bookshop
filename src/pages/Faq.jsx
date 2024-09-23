import React from 'react'

export const Faq = () => {
  return (
    <section id='faq' className='w-5/6 mx-auto pb-12'>
      <h1 className='text-5xl font-bold text-center py-12'>FAQ</h1>
      <div className="join join-vertical w-full rounded">
        {/* Question 1 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" defaultChecked />
          <div className="collapse-title text-xl font-medium">What is the return policy?</div>
          <div className="collapse-content">
            <p>You can return any book within 30 days of purchase as long as it is in its original condition.</p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" />
          <div className="collapse-title text-xl font-medium">How long does shipping take?</div>
          <div className="collapse-content">
            <p>Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders.</p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" />
          <div className="collapse-title text-xl font-medium">Do you offer discounts on bulk orders?</div>
          <div className="collapse-content">
            <p>Yes, we offer discounts on bulk purchases of 10 or more books. Contact our support for details.</p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" />
          <div className="collapse-title text-xl font-medium">Can I track my order?</div>
          <div className="collapse-content">
            <p>Yes, once your order is shipped, we will send you a tracking number via email.</p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" />
          <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
          <div className="collapse-content">
            <p>We accept credit/debit cards, PayPal, and Apple Pay. More options will be available soon.</p>
          </div>
        </div>

        {/* Question 6 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" />
          <div className="collapse-title text-xl font-medium">Do you offer gift cards?</div>
          <div className="collapse-content">
            <p>Yes, we offer digital gift cards that can be redeemed on our website.</p>
          </div>
        </div>
        {/* Question 7 */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="bookshop-faq" />
          <div className="collapse-title text-xl font-medium">Can I cancel my order?</div>
          <div className="collapse-content">
            <p>Yes, you can cancel your order within 24 hours of placing it. After that, the order may already be processed for shipping.</p>
          </div>
        </div>
      </div>

    </section>
  )
}
