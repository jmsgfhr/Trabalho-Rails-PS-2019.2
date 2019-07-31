class Post < ApplicationRecord
    validates_presence_of :message, message: "Taca um nome nesse lobo rapá"
end
