def caesar_cipher(str, shift)
alph = ('a'..'z').to_a
new_string = ''

    str.chars.each do |char|
        if char == " "
             new_string << " "
        else
            old_idx = alph.find_index(char)
            new_idx = (old_idx + shift) % 24
            new_string << alph[new_idx]
        end
    end
new_string

end

p caesar_cipher("hello", 4)