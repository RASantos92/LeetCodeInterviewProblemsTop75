def decode_message_file(input_file_path):
    # Read the input file and build a dictionary from it
    number_word_dict = {}
    pyramid_nums = []
    with open(input_file_path, 'r') as file:
        for line in file:
            number, word = line.split()
            pyramid_nums.append(number)
            number_word_dict[int(number)] = word

    pyramid_nums = list(map(int, pyramid_nums))
    pyramid_nums.sort()
    pyramid_structure = []
    current_index = 0
    for row_size in range(1, len(pyramid_nums) + 1):
        if current_index + row_size > len(pyramid_nums):
            break  # If we don't have enough numbers to complete the row, break
        row = pyramid_nums[current_index:current_index + row_size]
        pyramid_structure.append(row)
        current_index += row_size
    
    # Extract the last number of each row to decode the message
    decoded_message = [number_word_dict.get(row[-1], '') for row in pyramid_structure]

    # Return the decoded message as a string
    return ' '.join(decoded_message)

# Use the function and print the result
input_file_path = 'decode\coding_qual_input.txt'
message = decode_message_file(input_file_path)
print(message)