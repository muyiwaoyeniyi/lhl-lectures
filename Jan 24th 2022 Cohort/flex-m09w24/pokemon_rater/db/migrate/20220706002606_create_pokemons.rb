class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :names
      t.integer :likes, default: 0, null: false

      t.timestamps
    end
  end

  # def up
  #   # todo
  #   User.sql.execute("Create table pokemons")
  # end

  # def down
  #   User.sql.execute("drop table pokemons")
  # end
end
