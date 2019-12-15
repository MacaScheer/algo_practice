def make_matrix(str1, str2)
matrix = Array.new(str1.length + 1) {Array.new(str2.length + 1, 0)}
    str1.chars.each_with_index do |el1,idx1|
        str2.chars.each_with_index do |el2, idx2|
        if el1 == el2 
            matrix[idx1 + 1][idx2 + 1] = matrix[idx1][idx2] + 1
        else
            matrix[idx1 + 1][idx2 + 1] = 0;
        end
    end
end
matrix
end

def longest_common_substring(str1, str2)
matrix = make_matrix(str1,str2)
greatest_substring = ""
    matrix.each_with_index do |row, idx1|
        row.each_with_index do |length, idx2|
            if length > greatest_substring.length
                greatest_substring = str1[idx2 - length...idx2]
            end
        end
    end
    greatest_substring
end


#    |"" | C | A | T  
# --------------------
# "" | 0 | 0 | 0 | 0
# --------------------
# R  | 0 | 0 | 0 | 0
# --------------------
# A  | 0 | 0 | 1 | 0
# --------------------
# T  | 0 | 0 | 0 | 2 