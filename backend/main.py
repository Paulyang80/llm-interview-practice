from typing import List, Union

def process_item(items: List[str]) -> str:
    for item in items:
        print(item.title())

def process_item_union(item: Union[str, int]):
    print(item)
    
def process_item_union(item: str | int):
    print(item)

items = ["apple", "banana", "cherry"]
process_item(items)

item = "orange"
process_item_union(item)