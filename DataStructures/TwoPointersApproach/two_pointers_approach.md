# Two Pointers Approach

For questions where we’re trying to find a subset, a set of elements, or something in a **sorted array**, the 2 pointers approach is useful.

These kind of problems usually involve two pointers:

- One slow-runner and the other fast-runner: a classic example is to remove duplicates from a sorted array)
- One pointer starts from the beginning while the other pointer starts from the end: they move toward each other until they both meet.

**Sliding windows** are also a subtype of 2 pointers, where we use them to expand or shrink the window with a condition. 

Here below some examples for the 2-pointers approach application.

- [ ] `#i` implement a `nodes_linked-list` system in `C++` to test the codes below.

## General Code Template

General code template for solving a 2 pointer approach problem of the second type:

```cpp
/* General two pointer problem solution */
public boolean twoSumProblem(int A[], int N, int X)
{
    // represents first pointer
    int left = 0;
    // represents second pointer
    int right = N - 1;
    while (left < right) {
        // question condition match
        if(){
            // do something
            return true
        }
        // first wrong condition
        else if(){
            // close in the array from left
            left+=1;    
        }
        // second wrong condition
        else{
            // close in the array from right
            right-=1;
        }
    }
}
```

## Remove Duplicates 

Sample code in `C++` that removes the duplicates in a sorted array.

```cpp
int removeDuplicates(vector<int>& nums) {
        if (nums.size()==0) return 0;
        int slow = 0;
        for (int fast = 1; fast < nums.size(); fast++) {
            if (nums[slow] != nums[fast]) {
                slow++;
                nums[slow] = nums[fast];
            }
        }
        return slow + 1;
    }
```

## Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

```cpp
    ListNode* middleNode(ListNode* head) {
        if(head->next == nullptr) return head;
        ListNode* slow=head;
        ListNode* fast=head;
        while(fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
```

## Sort Array by Parity II

```cpp
vector<int> sortArrayByParityII(vector<int>& nums) {
    int n=nums.size();
    int i=0,j=n-1;
    while(i<n){
        while(i<n&&nums[i]%2==0) i+=2;
        if(i==n) break;
        while(j>=0&&nums[j]%2!=0) j-=2;
        swap(nums[i],nums[j]);
    }
    return nums;
}
```

## Reverse String

```cpp
void reverseString(vector<char>& s) {
    int i = 0;
    int n = s.size();
    while(i < n/2) {
        swap(s[i], s[n-1-i]);
        i ++;
    }
}
```

## Valid Palindrome

- [ ] TODO: more details about the method `s.erase(std::remove_if(s.begin(), s.end(), my_predicate), s.end());` [link](https://stackoverflow.com/questions/6319872/how-to-strip-all-non-alphanumeric-characters-from-a-string-in-c)

```cpp
bool isPalindrome(string s) {
    int i=0;
    s.erase(std::remove_if(s.begin(), s.end(), []( auto const& c ) -> bool { return !std::isalnum(c); } ), s.end());
    cout << s << endl;
    if(s.size()==0) return true;
    while(i<s.size()/2) {
        if(tolower(s[i]) != tolower(s[s.size()-1-i])) return false;
        i++;
    }
    return true;
}
```

## Sort Colors

Given an array iwth 0, 1, and 2 sort it in ascending order.

Example: `nums = [2,0,2,1,1,0] -> [0,0,1,1,2,2]`

Most efficient solution from the time-consuming point of view:

```cpp
void sortColors(vector<int>& nums) {
    sort(nums.begin(), nums.end());
}
```

Same time efficiency with less memory consumption:

```cpp
void sortColors(vector<int>& nums) {
    int i=0, i1=0, n=nums.size()-1;
    while(i1 <= n) {
        if(nums[i1] == 0) {
            swap(nums[i], nums[i1]);
            i++;
            i1++;
            }
        else if (nums[i1]==1) {
            i1++;
        }
        else {
            swap(nums[i1], nums[n]);
            n--;
        }
    }
}
```