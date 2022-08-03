class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :comments
      t.integer :score
      t.integer :user_id
      t.integer :game_id

      t.timestamps(:comment, :score, :user_id)
    end
  end
end
