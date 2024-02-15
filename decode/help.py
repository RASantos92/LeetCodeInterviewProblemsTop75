def decode_message_file(input_file_path):
    # Read the input file and build a dictionary from it and collect pyramid numbers
    number_word_dict = {}
    pyramid_nums = []

    with open(input_file_path, 'r') as file:
        for line in file:
            parts = line.strip().split()
            # If line has two parts, it's from the dictionary
            if len(parts) == 2:
                number, word = parts
                number_word_dict[int(number)] = word
            # If line has one part, it's a number for the pyramid
            elif len(parts) == 1:
                pyramid_nums.extend(parts)

    # Sort the numbers in ascending order and create the pyramid structure
    pyramid_nums = list(map(int, pyramid_nums))
    pyramid_nums.sort()
    # Create the pyramid structure
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
input_file_path = 'decode/coding_qual_input.txt'  # Replace with the path to your input file
message = decode_message_file(input_file_path)
print(message)