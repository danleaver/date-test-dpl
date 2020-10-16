class CreateClocks < ActiveRecord::Migration[6.0]
  def change
    create_table :clocks do |t|
      t.datetime :datetime_test
      t.date :date_test

      t.timestamps
    end
  end
end
