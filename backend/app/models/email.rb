class Email < ApplicationRecord
  belongs_to :user
  after_create :increase_user_email_count
  after_destroy :decrease_user_email_count

  validates :subject, :body,       presence: true

  def increase_user_email_count
    user.email_count += 1
    user.save
  end

  def decrease_user_email_count
    user.email_count -= 1
    user.save
  end
end
