# Red Panda Learn — Engineering Track: Product Requirements Document

**Version:** 1.0
**Date:** April 12, 2026
**Status:** Pre-development — Detailed specification complete
**Confidentiality:** Internal — Founders, Investors, Engineering, Design
**Parent document:** [PRD.md](./PRD.md) (School Track — Class 8-12 AI/ML)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Target Audience](#2-target-audience)
3. [Subject Overview](#3-subject-overview)
4. [Detailed Curriculum — Data Structures & Algorithms (DSA)](#4-detailed-curriculum--data-structures--algorithms-dsa)
5. [Detailed Curriculum — Computer Networks (CN)](#5-detailed-curriculum--computer-networks-cn)
6. [Detailed Curriculum — Operating Systems (OS)](#6-detailed-curriculum--operating-systems-os)
7. [Detailed Curriculum — Database Management Systems (DBMS)](#7-detailed-curriculum--database-management-systems-dbms)
8. [Detailed Curriculum — Object-Oriented Programming (OOP)](#8-detailed-curriculum--object-oriented-programming-oop)
9. [Visualization Philosophy & Technical Specification](#9-visualization-philosophy--technical-specification)
10. [Learning Modes](#10-learning-modes)
11. [Assessment System](#11-assessment-system)
12. [GATE CS Mapping — Complete Topic-to-Lesson Matrix](#12-gate-cs-mapping--complete-topic-to-lesson-matrix)
13. [Placement Interview Mapping — Company x Topic Frequency Matrix](#13-placement-interview-mapping--company-x-topic-frequency-matrix)
14. [Gamification Integration](#14-gamification-integration)
15. [Pricing](#15-pricing)
16. [Technical Architecture Notes](#16-technical-architecture-notes)
17. [Phase Plan](#17-phase-plan)

---

## 1. Executive Summary

Red Panda Learn is expanding beyond its School Track (Class 8-12 AI/ML) to serve the **engineering undergraduate audience** with a dedicated **Engineering Track**. This track delivers five core Computer Science subjects — Data Structures & Algorithms, Computer Networks, Operating Systems, Database Management Systems, and Object-Oriented Programming — through the same visualization-first, interactive pedagogy that defines the platform.

The Engineering Track targets three overlapping populations: (a) B.Tech CSE students preparing for university semester exams, (b) GATE CS/IT aspirants, and (c) placement seekers preparing for technical interviews at top product companies. Engineering Premium is ₹249/month (or ₹2,999 lifetime), with a generous free tier (3 lessons per subject) and 2-day free trial. Payment via Dodo Payments.

**Core differentiator:** Every single lesson ships with a bespoke interactive visualization — animated sorting bars, packet journey animations, Gantt chart builders, B-tree insertion demos, UML diagram builders — making abstract CS concepts tangible. No other platform offers this depth of visualization across all five subjects. Code examples use language-agnostic pseudocode, so learners are never locked into Python, Java, or C++.

The track contains 5 subjects, approximately 35 levels, and approximately 180 lessons. Each lesson includes learning objectives, an interactive visualization specification, GATE relevance mapping, and placement interview frequency data. Five distinct learning modes — Learn, Practice, GATE Prep, Placement Prep, and Exam Prep — ensure the content adapts to the learner's immediate goal.

### 1.1 Why Now?

The Indian technical education market is at an inflection point:

- **GATE registrations** have grown from 80,000 (2015) to 120,000+ (2025), with CS/IT being the largest branch by applicant volume.
- **Campus placement demand** has shifted: companies no longer accept rote learning. They want candidates who can visualize, trace, and reason about algorithms — exactly what our platform teaches.
- **Existing platforms fail at visualization.** GeeksforGeeks and Programiz offer text-heavy articles. LeetCode and HackerRank are problem-first (no teaching). Unacademy and PhysicsWallah offer video lectures (passive consumption). No platform offers the interactive, visualization-first approach that Red Panda Learn brings.
- **The ₹249/month price point** is 50-80% cheaper than competitors (Unacademy: ₹833/month, PW: ₹499/month, Coding Ninjas: ₹1,200/month+), making this accessible to Tier 2 and Tier 3 city students.

### 1.2 Competitive Landscape for Engineering Content

| Platform | Strengths | Weaknesses | Our advantage |
|---|---|---|---|
| **GeeksforGeeks** | Comprehensive text articles, large community | No interactive visualizations, article quality inconsistent, ad-heavy | Interactive viz on every lesson vs. passive reading |
| **LeetCode** | Massive problem bank, contest system | No teaching — assumes you already know the concepts, language-specific | We teach first, then practice — concept-before-code |
| **Unacademy** | Video lectures from well-known teachers, GATE focus | ₹833/month, passive video consumption, no interactivity, no visualizations | 70% cheaper, active learning with viz, not passive video |
| **PhysicsWallah** | Budget-friendly, large student community | Video-first (no text/interactive fallback), no placement focus, limited CS depth | Visualization-first, all 5 modes, deeper CS coverage |
| **Coding Ninjas** | Good DSA course, some placement prep | ₹1,200+/month, limited to DSA (weak on OS/CN/DBMS), language-locked (C++/Java) | All 5 subjects, language-agnostic pseudocode, 5x cheaper |
| **Striver's A2Z Sheet** | Excellent DSA problem list, free | No teaching (just problem links), no visualization, only DSA | Full curriculum + visualization + 5 subjects + GATE/Placement |
| **NPTEL** | IIT professors, free, recognized certificates | Dry presentation, no interactivity, semester-long courses | Bite-sized lessons, interactive visualizations, self-paced |
| **Visualgo (NUS)** | Excellent algorithm visualizations | Only covers DSA (no OS/CN/DBMS/OOP), no learning content, no assessments | Visualization across ALL 5 subjects + full curriculum + assessments |

### 1.3 Key Differentiators

1. **Visualization-first across 5 subjects** — not just DSA, but also OS Gantt charts, CN packet journeys, DBMS B-tree operations, and OOP UML builders.
2. **Language-agnostic pseudocode** — no student is excluded because they learned Java instead of C++ or Python.
3. **Five learning modes** — one platform adapts to your goal: semester exams, GATE, placements, practice, or learning.
4. **Affordable tiered pricing** — ₹249/month Engineering (or ₹2,999 lifetime), free tier (3 lessons/subject), 2-day trial, college bulk at ₹100/student/month.
5. **GATE PYQ mapping** — every lesson links directly to relevant GATE previous year questions.
6. **Company-specific placement prep** — tailored preparation paths for Amazon, Google, Microsoft, and 5 more companies.

---

## 2. Target Audience

### 2.1 Primary Segments

| Segment | Size (India est.) | Need | How we serve them |
|---|---|---|---|
| **B.Tech CSE students (Years 1-4)** | ~4 million enrolled | Conceptual clarity for semester exams, lab work, and viva | Learn mode + Exam Prep mode with university-style questions |
| **GATE CS/IT aspirants** | ~120,000 annual registrants | Deep conceptual understanding + previous year practice | GATE Prep mode with 3-hour mock tests, PYQ mapping, topic-wise tests |
| **Placement seekers** | ~800,000 final-year CSE students | DSA fluency, core CS interview prep, company-specific patterns | Placement Prep mode with company-wise question banks, mock interviews |
| **Self-taught developers** | Global, unbounded | Fill CS fundamentals gap | Learn mode with visualization-first approach, no prerequisites assumed |
| **Competitive programming beginners** | ~200,000 active in India | DSA and algorithm design foundations | DSA track levels 1-7, Practice mode with graded problems |

### 2.2 Geographic & Language Scope

- **Primary market:** India (English medium)
- **Secondary market:** Global English-speaking CS students
- **Language:** English only (no Hindi/regional language support in v1)
- **Currency:** INR (₹) for Indian users; USD conversion handled by Dodo Payments for international users

### 2.3 Prerequisite Assumptions

The Engineering Track assumes:
- Basic programming literacy (variables, loops, conditionals, functions) — not taught here
- Class 12 mathematics (logarithms, basic probability, set theory) — referenced but not re-taught
- No specific programming language required — all examples in pseudocode

---

## 3. Subject Overview

| # | Subject | Levels | Lessons (est.) | Scope |
|---|---|---|---|---|
| 1 | **Data Structures & Algorithms (DSA)** | 8 | 42 | Complete DSA syllabus: arrays through advanced segment trees, all major algorithm paradigms |
| 2 | **Computer Networks (CN)** | 7 | 34 | Full networking stack: physical layer through application layer, security, modern networking |
| 3 | **Operating Systems (OS)** | 7 | 35 | Complete OS: process management, synchronization, memory, file systems, I/O, advanced topics |
| 4 | **Database Management Systems (DBMS)** | 7 | 35 | Full DBMS: relational model through distributed databases, query optimization, transactions |
| 5 | **Object-Oriented Programming (OOP)** | 6 | 30 | Complete OOP: fundamentals through design patterns, SOLID, advanced topics |
| | **Total** | **35** | **~176** | |

### 3.1 Cross-Subject Dependencies

Some topics span subjects. The platform will surface cross-references:

- **DSA Hashing** links to **DBMS Indexing** (hash-based file organization)
- **OS Virtual Memory** links to **DSA Page Replacement** (LRU as a data structure problem)
- **CN Protocol Layering** links to **OOP Abstraction** (encapsulation analogy)
- **DBMS Concurrency Control** links to **OS Synchronization** (mutual exclusion, semaphores)
- **DSA Graph Algorithms** link to **CN Routing Algorithms** (shortest path in network graphs)

---

## 4. Detailed Curriculum — Data Structures & Algorithms (DSA)

### DSA Level 1: Foundations of Computation

**Theme:** Understand how we measure algorithm efficiency and master the two most fundamental data structures.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 1.1 | **What is an Algorithm?** | - Define algorithm, input, output, correctness, and termination - Distinguish between an algorithm and a program - Trace simple algorithms step by step | **Algorithm tracer:** A step-by-step animator that takes a simple recipe-style algorithm (e.g., find the maximum of 3 numbers) and walks through each instruction. Variables are shown as labeled boxes that update in real-time. Each step highlights the current instruction in the pseudocode panel, and the variable boxes animate their value changes. Users can input their own values and watch the trace change. | 1-2 marks — often a conceptual MCQ on algorithm properties | Low direct frequency, but foundational for every interview |
| 1.2 | **Time Complexity & Big-O Notation** | - Compute Big-O for simple loops (O(1), O(n), O(n^2), O(log n)) - Understand worst-case, best-case, and average-case analysis - Compare growth rates of common functions | **Growth rate visualizer:** An interactive coordinate plane (x-axis = input size n, y-axis = operations) that plots 1, log n, n, n log n, n^2, 2^n, and n! as colored curves. A vertical slider lets users move n from 1 to 1000 and watch the curves diverge. Below the graph, a "loop analyzer" panel accepts user-typed pseudocode loops (e.g., `for i = 1 to n: for j = 1 to n:`) and highlights the Big-O classification, annotating each loop with its contribution. | 3-5 marks across multiple questions — numerical and conceptual | Very high — almost every interview begins with "what's the time complexity?" |
| 1.3 | **Space Complexity** | - Compute auxiliary space for iterative vs recursive algorithms - Understand stack space in recursion - Distinguish between in-place and out-of-place algorithms | **Memory stack visualizer:** Split-screen: left panel shows pseudocode, right panel shows a vertical stack diagram. As the pseudocode executes (step-through or auto-play with speed control), stack frames push/pop with animation. Each frame shows local variables and their current values. A running counter at the top shows "Total auxiliary space used: O(...)". Users can toggle between an iterative and recursive version of the same algorithm (e.g., factorial) and see the stack difference. | 1-2 marks — often paired with time complexity questions | Medium — interviewers ask "can you do it in O(1) space?" |
| 1.4 | **Arrays — Fundamentals** | - Understand contiguous memory layout and index-based access - Perform insertion, deletion, and search in unsorted/sorted arrays - Analyze time complexity of each operation | **Array memory visualizer:** A horizontal strip of memory cells, each labeled with index and value. Hovering a cell shows its memory address (base + index * size). Insertion animates elements shifting right with arrows showing the movement. Deletion animates elements shifting left. A "sorted" toggle switches between linear search (highlighting each cell sequentially, O(n)) and binary search (highlighting the halving pattern, O(log n)). Users can input their own array values and perform operations. | 2-3 marks — array manipulation questions are common | Very high — arrays are the most common interview topic |
| 1.5 | **Strings — Operations & Pattern Matching Basics** | - Understand string as a character array with immutability considerations - Perform reverse, palindrome check, anagram detection - Understand substring search (brute force) | **String operation animator:** Characters displayed as individual tiles in a horizontal strip. Reverse operation shows tiles swapping from ends toward center with two-pointer arrows. Palindrome check shows two pointers converging, with matching tiles turning green and mismatches turning red. Anagram detection shows two strings side by side, with a frequency count bar chart below each — bars animate as characters are counted, and matching bars highlight. Brute-force substring search shows a sliding window overlay moving across the main string. Speed control + step mode. | 1-2 marks — string manipulation in GATE | Very high — string problems dominate interviews |
| 1.6 | **Two Pointer & Sliding Window Techniques** | - Apply two-pointer technique to sorted array problems (pair sum, remove duplicates) - Apply sliding window to find max/min subarray of size k - Recognize when to use each technique | **Two-pointer / sliding window visualizer:** Array displayed as a bar chart. Two colored arrows (pointers) sit below the bars and move according to the algorithm logic. For two-pointer pair-sum: left pointer starts at index 0, right at end; they move inward, and the current sum is shown above. For sliding window: a colored rectangle overlays k consecutive bars, slides right, and the window sum updates in real-time. Users can set array values and target/k values. Pseudocode panel on the right highlights the current line. Step-through and auto-play modes. | 2-3 marks — technique-based questions | Very high — top interview pattern |

---

### DSA Level 2: Linear Data Structures

**Theme:** Master linked lists, stacks, queues, and hashing — the building blocks of most complex systems.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 2.1 | **Singly Linked List** | - Understand node structure (data + pointer) and head pointer - Implement insertion (beginning, end, middle), deletion, and search - Compare array vs linked list tradeoffs | **Linked list visualizer:** Nodes rendered as rounded rectangles with two compartments (data | next). Arrows connect nodes left to right. Head pointer shown as a labeled arrow from above. Insertion at head: new node slides in from the left, arrow animates from new node to old head, then head pointer animates to new node. Insertion at position k: a traversal pointer (highlighted arrow) walks node by node with animation, stops at position k, new node drops in, and pointers re-wire with smooth arrow animation. Deletion: target node's incoming arrow re-routes to target's next, then target fades out. Users can type values and choose operation + position. Step mode shows pointer changes one at a time. | 2-3 marks — linked list operations and pointer manipulation | Very high — linked lists are a top interview topic |
| 2.2 | **Doubly Linked List & Circular Linked List** | - Implement doubly linked list with prev + next pointers - Understand circular linked list and its use cases (round-robin) - Detect cycle in a linked list (Floyd's algorithm) | **DLL/CLL visualizer:** Doubly linked list nodes have three compartments (prev | data | next) with bidirectional arrows. Circular variant shows the last node's arrow curving back to the first node. Floyd's cycle detection: two pointers (slow = turtle emoji color, fast = rabbit emoji color) animate at different speeds through the list. When they meet, the meeting point highlights. Users can create a cycle at any node and watch the detection algorithm run. Speed control available. | 1-2 marks — cycle detection is a GATE favorite | High — Floyd's algorithm is a classic interview question |
| 2.3 | **Stacks — LIFO Principle** | - Understand stack operations: push, pop, peek, isEmpty - Implement stack using array and linked list - Solve problems: balanced parentheses, postfix evaluation | **Stack visualizer:** A vertical container (like a jar) where elements are colored blocks that stack upward. Push: new block slides in from the side and drops onto the top with a bounce animation. Pop: top block lifts out and flies away. A "top" pointer arrow tracks the topmost element. For balanced parentheses: the input string scrolls character by character at the top; opening brackets push colored blocks (each bracket type has a color), closing brackets attempt to pop and match — green flash for match, red flash for mismatch. For postfix evaluation: operands push as numbered blocks, operators pop two blocks, show the operation, and push the result. | 2-3 marks — stack applications are heavily tested | High — stack problems common in interviews |
| 2.4 | **Queues — FIFO Principle** | - Understand queue operations: enqueue, dequeue, front, rear - Implement queue using array (circular) and linked list - Understand priority queue concept (detailed in heaps later) | **Queue visualizer:** A horizontal tube/pipe where elements enter from the right (rear) and exit from the left (front). Enqueue: block slides in from the right end. Dequeue: block slides out from the left end. Front and rear pointers shown as labeled arrows below the tube. Circular queue: the tube bends into a circle, with front/rear pointers rotating around it. Elements fill the circle and the "full" vs "empty" condition is visually distinguishable. Users input values and perform operations. A utilization counter shows how full the circular queue is. | 1-2 marks — queue operations and circular queue | Medium — less common than stacks in interviews |
| 2.5 | **Hashing — Hash Tables & Collision Resolution** | - Understand hash function, hash table, and load factor - Implement separate chaining (linked list at each bucket) - Implement open addressing: linear probing, quadratic probing, double hashing | **Hash table visualizer:** An array of buckets drawn as vertical slots. A hash function box at the top accepts the user's key input, animates the computation (key mod table_size), and an arrow directs the value to the correct bucket. For separate chaining: each bucket has a mini linked list that grows downward when collisions occur. For linear probing: on collision, a probe arrow bounces to the next slot, then the next, until an empty slot is found — the trail of probes is shown. For quadratic probing: probe jumps of 1, 4, 9, 16... are shown with arcing arrows. For double hashing: the second hash function box activates and computes the step size. Load factor gauge shown as a fill meter. Users can insert/search/delete keys and choose collision strategy. | 3-4 marks — hashing is heavily tested in GATE | Very high — hash maps are the most-used data structure in interviews |
| 2.6 | **Deque, Circular Queue & Special Queues** | - Implement double-ended queue (deque) with front/rear operations - Understand monotonic queue/stack for sliding window problems - Implement k-queues in a single array | **Deque visualizer:** A horizontal container where elements can enter/exit from both ends. Four operation buttons (pushFront, pushBack, popFront, popBack) each trigger appropriate animation. For monotonic queue: a sliding window moves across an array (shown as bar chart above), and the deque below maintains its invariant — elements that violate monotonicity pop out with a red flash before the new element enters. The current window maximum/minimum is highlighted. Users can input arrays and window sizes. | 1-2 marks — deque operations | Medium — monotonic queue/stack is a common pattern |

---

### DSA Level 3: Trees

**Theme:** Hierarchical data structures — from basic binary trees to self-balancing trees, heaps, and tries.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 3.1 | **Binary Trees — Structure & Traversals** | - Understand tree terminology (root, leaf, height, depth, level) - Implement inorder, preorder, postorder traversals (recursive) - Implement level-order traversal (BFS with queue) | **Binary tree visualizer:** A tree diagram rendered with nodes as circles connected by edges. Nodes are positioned using a layered layout algorithm. For each traversal type: nodes light up in traversal order with a numbered badge showing visit sequence. A queue/stack panel on the side shows the data structure driving the traversal (stack for DFS variants, queue for BFS). The output sequence builds character by character at the bottom. Users can click to add/remove nodes, or type a level-order input (e.g., "1,2,3,null,4,5") to build the tree. Speed control and step-through mode. | 3-4 marks — tree traversals are a GATE staple | Very high — tree problems are the second most common interview topic |
| 3.2 | **Binary Search Tree (BST)** | - Understand BST property (left < root < right) - Implement search, insertion, deletion (3 cases) - Understand inorder traversal of BST gives sorted output | **BST visualizer:** Tree diagram that enforces BST property. Insert: user types a value, and an animated pointer starts at root, compares at each node (left/right decision shown as a highlight), traverses down to the correct leaf position, and the new node appears with a drop animation. Delete: the three cases are visually distinct — (1) leaf: node fades out, (2) one child: node fades, child slides up, (3) two children: inorder successor highlights, its value copies to the deleted node, then the successor is removed. Search: same traversal animation with green (found) or red (not found) result. Users build custom BSTs. Inorder traversal button shows the sorted output. | 3-4 marks — BST operations are classic GATE questions | Very high — BST is fundamental to interviews |
| 3.3 | **AVL Trees — Self-Balancing BST** | - Understand balance factor and AVL property (|BF| <= 1) - Perform single and double rotations (LL, RR, LR, RL) - Trace insertion and deletion with rebalancing | **AVL tree visualizer:** BST visualizer extended with balance factor displayed inside each node. On insertion, if imbalance is detected, the violating node flashes red, the rotation type label appears (LL/RR/LR/RL), and the rotation animates smoothly: nodes physically move in an arc to their new positions, edges re-draw in real-time. For double rotations (LR, RL), the two sub-rotations animate sequentially. Balance factors update after rotation. Users can insert a sequence of values and watch the tree self-balance. A "height" label appears next to each node. Step-through mode pauses before/after each rotation. | 2-3 marks — AVL rotations are a common GATE topic | Medium — less common in interviews, but important conceptually |
| 3.4 | **Heaps & Priority Queues** | - Understand min-heap and max-heap properties - Implement insert (bubble-up) and extract-min/max (bubble-down) - Build a heap from an array (heapify) in O(n) - Implement heap sort | **Heap visualizer:** Dual representation: top half shows the tree diagram, bottom half shows the underlying array. Both update simultaneously. Insert: new element appears at the end of the array and the bottom of the tree, then bubble-up animates — the element swaps upward with its parent, and both representations update in sync. Extract: root removes, last element moves to root, bubble-down animates swaps with the smaller/larger child. Heapify: the array-to-tree transformation animates step by step, running sift-down from the last non-leaf node to the root. Heap sort: extract-min/max repeatedly, sorted elements accumulate on the side. Speed control + step mode. | 3-4 marks — heap operations and heap sort are GATE favorites | High — priority queues used in many interview problems |
| 3.5 | **Tries (Prefix Trees)** | - Understand trie structure for string storage - Implement insert, search, and prefix search - Understand space optimization (compressed trie) - Applications: autocomplete, spell checker | **Trie visualizer:** A tree where each edge is labeled with a character, and end-of-word nodes are marked with a flag. Insert: user types a word, and characters are consumed one by one — at each step, the current node highlights, the system checks if the character edge exists (green = follow existing, blue = create new), and the path grows. Search: traversal follows edges character by character, green flash at end-of-word node (found) or red flash when edge missing (not found). Prefix search: all words sharing the prefix highlight in the tree. Users can build a trie by inserting multiple words, then search and see the prefix-matching branches glow. A "words stored" list updates in real-time. | 1-2 marks — trie questions appear occasionally | High — autocomplete is a common interview question |
| 3.6 | **Segment Trees & Fenwick Trees (BIT)** | - Understand range query problem (range sum, range min/max) - Build segment tree and answer range queries in O(log n) - Understand lazy propagation for range updates - Introduce Fenwick tree (BIT) as a simpler alternative for prefix sums | **Segment tree visualizer:** A full binary tree overlaid on the input array. Each internal node shows the aggregate (sum/min/max) of its range, labeled with [l, r]. Build: bottom-up animation fills in values from leaves to root. Range query: the queried range highlights in the array, and the minimal set of tree nodes covering that range glows — their values combine to form the answer. Update: a leaf value changes, and updates propagate up the tree with cascading highlight. Lazy propagation: deferred updates shown as "pending" badges on nodes that activate (push-down) only when the node is queried. Fenwick tree: a separate view shows the BIT array with its "responsible range" arcs drawn above. Users input arrays, perform queries and updates. | 2-3 marks — segment trees appear in GATE | Medium — less common in standard interviews, important for competitive programming |

---

### DSA Level 4: Graphs

**Theme:** Graph representation, traversal, shortest paths, spanning trees, and topological ordering.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 4.1 | **Graph Representation** | - Understand vertices, edges, directed vs undirected, weighted vs unweighted - Implement adjacency matrix and adjacency list - Analyze space/time tradeoffs of each representation | **Graph builder:** An interactive canvas where users click to place nodes (circles with labels) and drag between nodes to create edges. A toggle switches between directed (arrows) and undirected (lines). A weight input appears when connecting nodes. Below the canvas, two panels show the adjacency matrix (a grid that updates cell colors as edges are added) and the adjacency list (each vertex has a linked list that grows). Adding an edge animates the corresponding matrix cell filling in and the list node appending. Users can freely build any graph and see both representations update in real-time. | 2-3 marks — representation questions are common | High — understanding graph representations is foundational |
| 4.2 | **Breadth-First Search (BFS)** | - Understand BFS traversal using a queue - Compute shortest path in unweighted graphs - Detect connected components - Analyze BFS time complexity: O(V+E) | **BFS wavefront visualizer:** User's graph (from builder or preset examples) displayed on canvas. BFS starts from a user-selected source node. A queue panel on the right shows the queue state. The source node turns blue, then its neighbors turn light-blue (in queue). Each "step" dequeues a node (turns it dark-blue = visited) and enqueues its unvisited neighbors (turn light-blue). The wavefront effect shows BFS exploring layer by layer. Distance labels appear on each node as they're visited. The BFS tree is drawn with highlighted edges as the traversal progresses. Step-through mode with pseudocode line highlighting. Auto-play with speed control. | 3-4 marks — BFS is heavily tested in GATE | Very high — BFS is fundamental to many interview problems |
| 4.3 | **Depth-First Search (DFS)** | - Understand DFS traversal using a stack (explicit or recursive) - Classify edges: tree, back, forward, cross - Detect cycles in directed and undirected graphs - DFS timestamps: discovery and finish times | **DFS explorer visualizer:** Same graph canvas. DFS starts from user-selected source. A stack panel shows the explicit stack (or call stack for recursive view — togglable). The current node turns green (active), visited nodes turn dark-green, and the DFS dives deeper with an animated "tunneling" effect along edges. Back edges are drawn as dashed red lines when detected (cycle indicator). Edge classification labels (T/B/F/C) appear on edges as they're traversed. Discovery/finish timestamps appear as (d/f) labels on nodes. Step-through mode with pseudocode highlighting. | 3-4 marks — DFS and cycle detection are GATE staples | Very high — cycle detection and DFS are core interview topics |
| 4.4 | **Dijkstra's Shortest Path Algorithm** | - Understand greedy approach to single-source shortest path - Implement Dijkstra's with a priority queue - Understand why Dijkstra's fails with negative weights - Trace the algorithm on weighted graphs | **Dijkstra's visualizer:** Weighted graph on canvas. User selects a source node. All nodes display "INF" distance initially, source shows "0". A priority queue panel on the right. At each step: the minimum-distance node is extracted from the PQ (flashes gold), its neighbors are "relaxed" — if a shorter path is found, the neighbor's distance label animates from old value to new value, and the edge glows to show the relaxation. Finalized nodes turn green. The shortest path tree builds as edges are confirmed. Users can click any destination node after completion to see the shortest path highlighted in yellow with total distance shown. Speed control + step mode with pseudocode. | 3-4 marks — Dijkstra's is a GATE favorite | Very high — shortest path is one of the most common graph interview questions |
| 4.5 | **Bellman-Ford & Negative Cycles** | - Understand edge relaxation over V-1 iterations - Detect negative weight cycles - Compare with Dijkstra's (when to use which) | **Bellman-Ford visualizer:** Weighted graph (can include negative edge weights, shown in red). Animation runs V-1 passes over all edges. In each pass, every edge is relaxed: if a shorter distance is found, the destination node's label updates with an animation and the edge flashes. A pass counter shows "Pass i of V-1". After V-1 passes, a final pass checks for further relaxations — if any occur, a negative cycle is detected and the cycle edges glow red with a pulsing animation. Side-by-side comparison mode shows Dijkstra's (failing) and Bellman-Ford (succeeding) on the same negative-weight graph. | 2-3 marks — Bellman-Ford and negative cycles in GATE | Medium — less common in interviews than Dijkstra's |
| 4.6 | **Minimum Spanning Tree — Kruskal's & Prim's** | - Understand MST problem and cut property - Implement Kruskal's algorithm with Union-Find - Implement Prim's algorithm with priority queue - Compare the two approaches | **MST dual visualizer:** Weighted undirected graph. Two side-by-side panels run Kruskal's and Prim's simultaneously. Kruskal's: edges sorted by weight in a list on the side; each edge is considered in order — if it doesn't create a cycle (Union-Find check visualized as a color-based component merge), the edge glows green and is added to MST; if it creates a cycle, it flashes red and is rejected. Prim's: starts from a user-selected node, grows the MST by adding the cheapest edge connecting tree to non-tree vertex (similar to Dijkstra's visualization but for MST). Both panels show running MST cost. At completion, both MSTs are highlighted and costs compared (they match). | 3-4 marks — MST algorithms are heavily tested | High — MST appears in system design and graph interviews |
| 4.7 | **Topological Sort** | - Understand DAGs and topological ordering - Implement topological sort using DFS (reverse finish order) - Implement Kahn's algorithm (BFS with in-degree) - Applications: build systems, course scheduling | **Topological sort visualizer:** A directed acyclic graph on canvas (if user adds a cycle, it flashes red and warns "Not a DAG"). Two tabs: DFS-based and Kahn's. DFS-based: runs DFS, when a node finishes (all descendants visited), it pushes onto a stack — the stack builds on the side. At the end, the stack is popped to show the topological order. Kahn's: in-degree values shown inside nodes. Nodes with in-degree 0 enter a queue; each dequeued node is placed in the output sequence, and its neighbors' in-degrees decrement (animate the number decreasing). The final topological order appears as a horizontal sequence at the bottom. Step-through with pseudocode. | 2-3 marks — topological sort in GATE | High — topological sort for dependency resolution |

---

### DSA Level 5: Sorting & Searching

**Theme:** Comprehensive coverage of sorting algorithms and advanced searching techniques.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 5.1 | **Bubble Sort & Selection Sort** | - Implement bubble sort with early termination optimization - Implement selection sort - Analyze O(n^2) behavior and stability of each - Understand when simple sorts are acceptable | **Sorting comparison visualizer:** Array shown as a row of colored bars (height = value). Bubble sort: adjacent bars compare (both highlight), swap if out of order (bars physically swap positions with animation), repeat passes. After each pass, the largest unsorted bar is confirmed in place (turns green). Selection sort: current minimum highlighted in yellow, scanned portion in blue, minimum swaps to the front of unsorted region. A pass counter, comparison counter, and swap counter update in real-time. Users input custom arrays (up to 50 elements) or choose presets (sorted, reverse, random, nearly sorted). Speed slider from 0.25x to 4x. Step-through mode with pseudocode line highlighting. | 2-3 marks — sorting analysis questions | Medium — rarely asked directly, but understanding is fundamental |
| 5.2 | **Insertion Sort** | - Implement insertion sort - Understand its adaptive behavior (O(n) for nearly sorted) - Understand stability and in-place properties - Recognize insertion sort in practice (small subarrays in hybrid sorts) | **Insertion sort visualizer:** Array as colored bars. The current element (being inserted) lifts out of its position and hovers above the array. A pointer scans backward through the sorted portion, shifting elements right (bars slide right one position each). When the correct position is found, the hovering element drops into place. The sorted portion is shaded green, unsorted portion is shaded gray. Comparison and shift counters. Users can input arrays. Special preset: "nearly sorted" array to demonstrate adaptive O(n) behavior (very few shifts visible). Step-through with pseudocode. | 1-2 marks — adaptive sorting analysis | Low — rarely asked directly |
| 5.3 | **Merge Sort** | - Implement merge sort (divide-and-conquer) - Understand the merge operation - Analyze O(n log n) time and O(n) space - Count inversions using merge sort | **Merge sort visualizer:** Array as bars at the top. The divide phase splits the array into halves recursively — bars physically separate into groups with horizontal space between them, forming a binary tree of sub-arrays. The merge phase animates bottom-up: two sorted sub-arrays sit side by side, two pointers (one for each) compare, the smaller element drops into the merged result below. The binary tree of splits/merges is drawn on the side showing the recursion tree. A recursion depth counter and a merge operation counter track progress. Inversion count mode: each time a right-half element is placed before remaining left-half elements, the inversion count increments and the crossing pair flashes. | 3-4 marks — merge sort recurrence and inversions in GATE | High — merge sort is a common interview topic |
| 5.4 | **Quick Sort** | - Implement quicksort with Lomuto and Hoare partition schemes - Understand pivot selection strategies (first, last, random, median-of-3) - Analyze worst-case O(n^2) and expected O(n log n) - Understand randomized quicksort | **Quick sort visualizer:** Array as bars. Partition phase: pivot bar highlighted in gold. Lomuto: i pointer (red) and j pointer (blue) scan from left. Elements less than pivot swap to the left partition (bars slide with animation), elements greater stay right. After partition, pivot swaps to its final position (glows green — "this element is in its correct sorted position"). Recursion proceeds on left and right sub-arrays (dimmed bars for the sub-array not currently being processed). Hoare: two pointers from opposite ends move toward each other, swapping when they find a pair on the wrong side. Pivot selection dropdown: first/last/random/median-of-3. Users can choose worst-case inputs (already sorted + first-element pivot) to see O(n^2) behavior. | 3-4 marks — quicksort partition and analysis in GATE | Very high — quicksort is the most-asked sorting algorithm in interviews |
| 5.5 | **Counting Sort, Radix Sort & Bucket Sort** | - Implement counting sort (integer range-based) - Implement radix sort (digit-by-digit using counting sort) - Implement bucket sort (distribution-based) - Understand O(n+k) and O(d*(n+k)) complexities — when they beat comparison sorts | **Non-comparison sort visualizer:** Counting sort: array of integers at top, count array below showing frequency of each value (bars in count array grow as elements are counted), cumulative count array, then output array fills from right to left as elements are placed. Radix sort: numbers shown with digits highlighted — first pass highlights ones digit and sorts by it (using counting sort animation), second pass highlights tens digit, etc. Each pass rearranges the bars and shows the intermediate sorted state. Bucket sort: elements distributed into buckets (vertical columns), each bucket is individually sorted (insertion sort animation within), then buckets are concatenated. | 2-3 marks — non-comparison sorts in GATE | Medium — understanding when to use non-comparison sorts |
| 5.6 | **Binary Search & Variants** | - Implement binary search on sorted arrays - Handle variants: lower bound, upper bound, search in rotated sorted array - Apply binary search on answer (e.g., minimum capacity to ship packages) - Analyze O(log n) behavior | **Binary search visualizer:** Sorted array as bars. A search range is shown as a highlighted window. At each step: mid is computed (mid pointer arrow), mid value compared with target — if target < mid, right half dims; if target > mid, left half dims. The window shrinks by half each step. Found: mid bar glows green. Not found: window collapses to empty, red flash. For lower/upper bound: multiple matches shown, the bound variant finds the leftmost/rightmost. For rotated array: the array visually shows the rotation point (a dip in bar heights), and the modified binary search logic is shown in pseudocode. For binary search on answer: a number line shows the search space for the answer, and the feasibility check is a separate animation. | 2-3 marks — binary search variants are GATE favorites | Very high — binary search is one of the most common interview patterns |

---

### DSA Level 6: Algorithm Design Paradigms

**Theme:** Master the four major algorithm design strategies: recursion/backtracking, divide & conquer, greedy, and dynamic programming.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 6.1 | **Recursion — Thinking Recursively** | - Identify base case and recursive case - Trace recursion using call stack - Convert iterative solutions to recursive and vice versa - Understand tail recursion and its optimization | **Recursion tree visualizer:** The recursion tree is drawn as a binary/multi-way tree where each node represents a function call with its arguments. As execution proceeds, nodes light up in DFS order (call → recurse → return). The call stack panel on the right pushes/pops frames in sync. Return values propagate up from leaves to root with upward-flowing animations. Users can input different n values and watch the tree grow/shrink. Examples: factorial, Fibonacci (showing exponential tree), tower of Hanoi (3-peg physical animation with disk movement). A counter shows total function calls. | 2-3 marks — recursion tracing in GATE | Very high — recursion is the foundation of most interview problems |
| 6.2 | **Backtracking** | - Understand backtracking as pruned recursion - Solve N-Queens problem - Solve Sudoku solver - Apply backtracking to permutations/combinations | **Backtracking state-space tree:** A tree visualization where each branch represents a choice. N-Queens: an 8x8 chessboard on the left. The algorithm places queens row by row; placed queens appear on the board. When a conflict is detected (row/column/diagonal attack shown as red lines), the branch is pruned (node in tree turns red with an X). Backtrack animation: queen is removed from the board, tree backtracks (path dims). Valid placements glow green. All valid solutions can be enumerated. Sudoku: a 9x9 grid fills in numbers; invalid placements flash red, backtrack clears the cell. The state-space tree on the side shows the branching/pruning decisions. Step-through + auto-play. | 2-3 marks — backtracking problems in GATE | High — N-Queens, Sudoku, and permutation generation in interviews |
| 6.3 | **Divide & Conquer** | - Understand the D&C paradigm: divide, conquer, combine - Analyze recurrences using the Master Theorem - Apply D&C: closest pair of points, Strassen's matrix multiplication - Recognize D&C patterns in sorting algorithms | **Divide & conquer visualizer:** For closest pair: a 2D scatter plot of points. The algorithm divides the plane with a vertical line (animated), recurses on each half (left and right halves glow separately), finds minimum in each half, then checks the "strip" around the dividing line (strip region highlighted). The closest pair in each phase is connected by a glowing line. For the Master Theorem: an interactive calculator where users input a, b, and f(n), and the tool shows which case applies (1, 2, or 3), draws the recursion tree with work-per-level annotations, and computes the final complexity. | 2-3 marks — Master Theorem is a GATE favorite | Medium — D&C patterns recognized in interviews |
| 6.4 | **Greedy Algorithms** | - Understand the greedy choice property and optimal substructure - Solve activity selection / interval scheduling - Solve fractional knapsack - Huffman coding as a greedy algorithm | **Greedy algorithm visualizer:** Activity selection: a timeline with horizontal bars representing activities (start to end). The algorithm scans left to right, selects the earliest-finishing non-overlapping activity (bar turns green), skips overlapping ones (bar turns red with strikethrough). Fractional knapsack: items shown as boxes with weight and value labels on a table, knapsack on the side with a capacity meter. Items are sorted by value/weight ratio and placed into the knapsack — the last item may be fractionally cut (animated slicing). Huffman coding: character frequencies shown as bars, then pairs merge into a binary tree with animated node merging, final tree shows Huffman codes along edges. | 3-4 marks — greedy algorithms heavily tested in GATE | High — greedy problems common in interviews |
| 6.5 | **Dynamic Programming — 1D Problems** | - Understand overlapping subproblems and optimal substructure - Implement top-down (memoization) and bottom-up (tabulation) - Solve: Fibonacci, climbing stairs, coin change, longest increasing subsequence (LIS), house robber | **DP table-filling visualizer:** A 1D array (table) at the bottom. For top-down: a recursion tree draws at the top; when a subproblem is first computed, its result fills the corresponding table cell (upward arrow from tree node to table). When a cached subproblem is hit, the tree node flashes yellow ("memoized!") and the table cell glows — no further recursion from that branch. For bottom-up: the table fills left to right; each cell's value is computed from previously filled cells with arrows showing dependencies. The dependency arrows animate as each cell is computed. Pseudocode panel shows the current line. Users can input parameters (e.g., coin denominations and target amount). Comparison toggle: naive recursion vs memoized vs tabulation showing call counts. | 5-7 marks — DP is the single highest-weighted GATE topic in algorithms | Very high — DP is the most common hard interview topic |
| 6.6 | **Dynamic Programming — 2D Problems** | - Extend DP to 2D tables - Solve: 0/1 Knapsack, Longest Common Subsequence (LCS), Edit Distance, Matrix Chain Multiplication - Reconstruct the optimal solution (not just the value) | **2D DP table visualizer:** A 2D grid (matrix) fills cell by cell. For LCS: two strings along the top and left axes. Each cell shows the LCS length. When a cell is computed, arrows from the cells it depends on (top, left, or diagonal) animate in. Matching characters cause a diagonal arrow (green), non-matching takes max of top/left (blue arrows). After the table is filled, the backtracking path highlights in yellow, and the LCS string builds character by character. For 0/1 Knapsack: items along one axis, capacity along the other. Each cell's "include" vs "exclude" decision is shown with two candidate values and the max is chosen. Backtracking highlights which items are included. For Edit Distance: three operation arrows (insert/delete/replace) in different colors. For MCM: the table fills along diagonals with optimal split points. All have step-through, speed control, and user input. | 5-7 marks — 2D DP problems are the highest-weighted GATE topic | Very high — LCS, knapsack, edit distance are top interview problems |

---

### DSA Level 7: Advanced Topics

**Theme:** Disjoint Set Union, advanced string algorithms, and bit manipulation.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 7.1 | **Disjoint Set Union (Union-Find)** | - Understand union and find operations - Implement path compression and union by rank - Apply to connected components and cycle detection - Understand amortized O(alpha(n)) complexity | **Union-Find visualizer:** Elements shown as nodes in a forest (collection of trees). Initially, each element is its own root (n separate nodes). Union: two trees merge — the smaller tree's root attaches under the larger tree's root (union by rank). The tree physically rearranges with animation. Find: a path from a node to its root highlights; with path compression, every node along the path re-attaches directly to the root (arrows animate to skip intermediate nodes, tree flattens). Component coloring: each component has a distinct color that all its members share. Users can perform union/find operations interactively and see the forest evolve. A "components: k" counter tracks the number of disjoint sets. | 2-3 marks — DSU appears in GATE | Medium — DSU used in Kruskal's and connectivity problems |
| 7.2 | **String Algorithms — KMP Pattern Matching** | - Understand the failure function (partial match table / LPS array) - Implement KMP algorithm for pattern matching in O(n+m) - Compare with brute-force O(nm) approach | **KMP visualizer:** Text string as a long horizontal strip of character tiles at the top. Pattern as a shorter strip below that slides along. Brute-force mode: pattern shifts one position at a time on mismatch, mismatched character pair flashes red. KMP mode: the LPS array is computed first — an animated table-building process shows how each LPS value is derived (prefix-suffix matching animation). During search, on mismatch, instead of shifting by 1, the pattern jumps according to LPS value (the jump distance is shown as an arc arrow). Matched characters turn green. Side-by-side comparison with brute force shows the efficiency gain — a comparison counter for each. Users can input text and pattern. | 2-3 marks — KMP and string matching in GATE | Medium — pattern matching in interviews |
| 7.3 | **String Algorithms — Rabin-Karp** | - Understand rolling hash concept - Implement Rabin-Karp algorithm for pattern matching - Handle hash collisions (spurious hits) - Applications: multi-pattern matching, plagiarism detection | **Rabin-Karp visualizer:** Text string as character tiles with a sliding window (equal to pattern length). The hash value of the window is computed and displayed above it. The pattern's hash value is shown separately. As the window slides: the rolling hash updates by removing the leftmost character's contribution and adding the new character's contribution (each operation animates as arithmetic on the hash value display). When hashes match: the window glows yellow (potential match), then character-by-character comparison runs. True match: green. Spurious hit (hash match but string mismatch): orange flash with "spurious hit" label. Comparison counter shows the savings vs brute force. | 1-2 marks — Rabin-Karp occasionally in GATE | Low — less common in interviews, but conceptually interesting |
| 7.4 | **Bit Manipulation** | - Understand bitwise operators: AND, OR, XOR, NOT, left/right shift - Solve problems: check if power of 2, count set bits, find single non-repeating element - Understand bit masking and subset generation | **Bit manipulation visualizer:** Numbers shown in dual representation: decimal on top, binary (as a row of 0/1 toggle switches) below. Users can click individual bits to toggle them and see the decimal update. Operations: two operand rows + one result row. Performing AND/OR/XOR highlights which bits interact (column-by-column animation with the operation logic gate symbol between them). Count set bits: bits light up one by one as they're counted (Brian Kernighan's trick shows n & (n-1) clearing the lowest set bit each iteration, animating the binary representation changing). XOR single element: an array of numbers with their binary representations; XOR accumulator shows running XOR, paired elements cancel out (turn gray), leaving the unique element (glows). Subset generation: an n-bit counter from 0 to 2^n-1, each bit position corresponds to an array element (include/exclude). | 2-3 marks — bit manipulation in GATE | High — bit manipulation is a common interview topic |
| 7.5 | **Advanced Graph Algorithms** | - Understand Strongly Connected Components (Kosaraju's and Tarjan's) - Implement Floyd-Warshall all-pairs shortest paths - Understand max-flow / min-cut (Ford-Fulkerson) - Network flow applications | **Advanced graph visualizer:** Kosaraju's: a directed graph where the algorithm runs DFS on original graph (showing finish order), then reverses all edges (arrows animate flipping direction), then runs DFS on reversed graph in decreasing finish order — each DFS tree in the second pass is an SCC, colored distinctly. Tarjan's: DFS with low-link values shown on nodes, SCCs identified when low-link equals discovery index. Floyd-Warshall: a distance matrix fills cell by cell as each intermediate vertex k is considered — the current k row and column highlight, and cells update when a shorter path through k is found. Ford-Fulkerson: flow network with capacity/flow labels on edges, augmenting paths highlight and flow pushes through with animation. | 3-4 marks — SCC and Floyd-Warshall in GATE | Medium — less common in standard interviews, important for system design |
| 7.6 | **Advanced Data Structures** | - Understand B-trees and B+ trees (intro for DBMS crossover) - Red-Black trees (concept and rotation rules) - Skip lists (probabilistic data structure) - Bloom filters (probabilistic membership) | **Advanced DS visualizer:** B-tree: multi-way tree with nodes containing multiple keys. Insertion animates: key finds its leaf, if leaf overflows, it splits (middle key moves up, node physically splits into two with animation). Search: key comparison within each node highlighted left to right. Red-Black tree: BST with red/black node coloring, rotation and recoloring animations on insertion/deletion with rule violation detection. Skip list: multiple layers of linked lists, with express lanes (higher levels) glowing during search to show how they skip ahead. Bloom filter: a bit array with multiple hash functions — insert shows multiple positions being set; query shows checking multiple positions (all 1 = "probably yes", any 0 = "definitely no"). | 2-3 marks — B-trees in GATE (DBMS crossover) | Medium — B-trees for DBMS, skip lists for system design |

---

### DSA Level 8: Problem-Solving Patterns & Interview Strategies

**Theme:** Synthesize all DSA knowledge into recognizable problem-solving patterns used in GATE and interviews.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 8.1 | **Pattern: Sliding Window & Two Pointers (Advanced)** | - Identify problems solvable by sliding window (variable-size window) - Identify problems solvable by two pointers on sorted/unsorted data - Solve: longest substring without repeating characters, minimum window substring - Recognize the "shrink window when condition violated" pattern | **Sliding window advanced visualizer:** A string or array as character/number tiles. A window (colored overlay rectangle) starts at the left. As the right pointer extends, the window grows. When a condition is violated (e.g., duplicate character found), the left pointer advances to shrink the window. A "window state" panel shows the current window contents, the condition being tracked (e.g., character frequency map), and the best answer found so far. The frequency map is shown as a bar chart that updates in real-time. Users can input their own strings and conditions. Pseudocode panel highlights the current line. | 2-3 marks — pattern-based questions | Very high — sliding window is one of the top 3 interview patterns |
| 8.2 | **Pattern: Binary Search on Answer** | - Recognize "minimize the maximum" or "maximize the minimum" problems - Apply binary search on the answer space, not the data - Solve: allocate minimum number of pages, aggressive cows, capacity to ship packages - Understand the feasibility check function | **Binary search on answer visualizer:** A number line representing the answer space (e.g., minimum capacity from 1 to sum of weights). Binary search operates on this number line: mid is chosen, a feasibility check runs (animated: given capacity = mid, can we ship all packages in D days? Each package is loaded onto a "truck" visualization, and if the truck overflows, a new truck starts — the number of trucks is counted). If feasible (trucks <= D), the answer might be smaller (search left). If not feasible, search right. The number line shrinks with each iteration. Users can input their own problem parameters. | 2-3 marks — binary search on answer in GATE | Very high — top interview pattern |
| 8.3 | **Pattern: Monotonic Stack/Queue** | - Identify problems requiring "next greater/smaller element" - Apply monotonic stack for NGE, daily temperatures, largest rectangle in histogram - Apply monotonic deque for sliding window maximum/minimum | **Monotonic stack visualizer:** An array as a bar chart at the top. A stack (vertical container) on the right. As each element is processed left to right: if the stack is empty or current element is smaller than the stack top, push (bar enters stack). If current element is greater than stack top, pop elements from the stack (they've found their "next greater element" — an arrow draws from the popped element's bar to the current bar). The "next greater" array builds at the bottom. For largest rectangle in histogram: bars are pushed/popped from the stack, and when a bar is popped, the maximum rectangle area using that bar as the shortest is computed (a rectangle overlay highlights on the histogram). | 1-2 marks — stack-based patterns | High — monotonic stack problems in interviews |
| 8.4 | **Pattern: Graph Modeling of Non-Graph Problems** | - Model matrix/grid problems as graph problems (BFS/DFS on 2D grids) - Model word ladder, rotten oranges, shortest path in binary matrix - Understand when to use BFS (shortest path in unweighted) vs DFS (explore all paths) | **Grid-to-graph visualizer:** A 2D grid (matrix) displayed as a grid of cells. Each cell is a node; edges connect adjacent cells (4-directional or 8-directional, togglable). BFS on grid: a wavefront animation spreads from the source cell, coloring visited cells by distance (concentric rings of color). Rotten oranges: orange cells turn rotten (color change) layer by layer, with a minute counter. Word ladder: nodes are words, edges connect words differing by one letter — BFS finds the shortest transformation sequence. Users can click cells to set walls/sources/targets and run BFS/DFS. | 2-3 marks — grid-based graph problems | Very high — grid BFS/DFS is a top interview pattern |
| 8.5 | **Pattern: DP State Design & Optimization** | - Design DP states for complex problems (bitmask DP, interval DP) - Optimize space complexity (1D DP from 2D, rolling array) - Understand when DP applies vs when greedy suffices - Solve: palindrome partitioning, egg dropping, word break | **DP state design visualizer:** For bitmask DP (e.g., Traveling Salesman): a set of cities displayed as nodes. The state is (current city, visited set). The visited set is shown as a bitmask (row of 0/1 bits), and the DP table is indexed by (city, bitmask). As the DP fills, each state transition highlights the corresponding bitmask change and the city transition. For space optimization: a 2D DP table is shown, then the optimization highlights that each row only depends on the previous row — the table collapses from 2D to two 1D arrays (visual compression animation). For egg dropping: a 2D table (eggs x floors) fills with the optimal number of trials. | 3-5 marks — advanced DP in GATE | Very high — DP pattern recognition is the most important interview skill |
| 8.6 | **Comprehensive Problem Solving — Putting It All Together** | - Given a new problem, identify which pattern(s) apply - Combine multiple techniques (e.g., binary search + greedy, BFS + DP) - Analyze tradeoffs between multiple valid approaches - Communicate solutions clearly (interview simulation format) | **Pattern recognition trainer:** A problem statement is displayed. The student must identify the applicable pattern(s) from a palette of pattern cards (sliding window, two pointers, binary search, BFS, DFS, DP, greedy, stack/queue, hashing, divide & conquer). Selecting the correct pattern(s) unlocks the solution approach. Multiple approaches are shown side by side with their complexities. An "interview mode" panel prompts: "Talk through your approach" → "Code the solution in pseudocode" → "Analyze time and space" → "Handle edge cases" → "Can you optimize?". This lesson ties together all 7 previous levels. | 3-5 marks — comprehensive problem solving | Very high — pattern recognition is the key to interview success |

---

## 5. Detailed Curriculum — Computer Networks (CN)

### CN Level 1: Foundations of Networking

**Theme:** What is a network, how does it work, and what are the fundamental models that describe it?

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 1.1 | **What is a Computer Network?** | - Define computer network and its goals (resource sharing, communication, reliability) - Classify networks: LAN, MAN, WAN, PAN - Understand client-server vs peer-to-peer models | **Network type visualizer:** An interactive map/canvas. Users can drag-and-drop device icons (computer, server, phone, printer) onto the canvas and draw connections. Templates show: LAN (devices in a room connected to a switch), MAN (buildings in a city connected by fiber), WAN (cities connected by routers across a country). Client-server mode: one device glows as server, others send requests (animated arrows). Peer-to-peer: all devices exchange data equally (bidirectional arrows). Scale indicators show typical distances and speeds for each network type. | 1 mark — basic conceptual question | Low — foundational but rarely asked directly |
| 1.2 | **Network Topologies** | - Understand bus, star, ring, mesh, and hybrid topologies - Analyze advantages/disadvantages of each - Calculate redundancy and fault tolerance | **Topology builder:** An interactive canvas with device nodes. Users click a topology type (bus, star, ring, mesh) and devices auto-arrange into that pattern with animated connections forming. For each topology: fault simulation — click a connection to "cut" it (turns red with a snapping animation) and see which devices lose connectivity (disconnected devices dim). Click a node to "fail" it and see the impact. A stats panel shows: total connections, redundancy factor, single point of failure (highlighted). Hybrid mode lets users combine topologies. | 1 mark — topology identification | Low — basic knowledge |
| 1.3 | **The OSI Model — 7 Layers** | - Name and describe all 7 layers of the OSI model - Understand PDU (Protocol Data Unit) at each layer - Understand encapsulation and decapsulation | **OSI layer cake visualizer:** Seven horizontal layers stacked vertically, each labeled and colored distinctly. A "message" block starts at the Application layer. As it descends through each layer (click to step, or auto-play), a header (and trailer at Data Link) wraps around the message — each header is a colored box that attaches with a snap animation. The PDU name updates at each layer (Data → Segment → Packet → Frame → Bits). At the bottom (Physical), the encapsulated data "travels" across a wire to a second stack, where decapsulation reverses the process — headers peel off layer by layer as the message ascends. Users can click any layer to see details about its protocols and responsibilities in a popover panel. | 2-3 marks — OSI model questions are GATE staples | Medium — conceptual understanding expected |
| 1.4 | **The TCP/IP Model** | - Understand the 4/5-layer TCP/IP model and its mapping to OSI - Identify key protocols at each layer - Understand why TCP/IP won over OSI in practice | **TCP/IP vs OSI comparison visualizer:** Two layer stacks side by side (OSI on left, TCP/IP on right). Colored mapping lines connect corresponding layers. An interactive protocol browser: clicking a layer in the TCP/IP stack shows its protocols as clickable icons (e.g., Network layer shows IP, ICMP, ARP). Clicking a protocol shows a brief description and a "see it in action" button that launches a mini-animation (e.g., ARP request broadcast animation). Data encapsulation animates through the TCP/IP stack with real protocol headers (TCP header, IP header, Ethernet frame). | 1-2 marks — TCP/IP model comparison | Low — foundational |
| 1.5 | **Switching Techniques** | - Understand circuit switching, message switching, packet switching - Compare store-and-forward vs cut-through switching - Understand virtual circuits vs datagram approach | **Switching simulator:** Three panels showing the same source-destination pair connected through intermediate nodes. Circuit switching: a dedicated path highlights in gold and stays reserved for the entire communication — other traffic queues (shown as waiting packets). Message switching: the entire message hops node by node (store at each, then forward — message sits at each node momentarily). Packet switching: the message splits into numbered packets that take different paths and arrive out of order, then reassemble at the destination. A timeline at the bottom shows total transmission time for each method. Users can adjust message size and link speeds. | 2-3 marks — switching comparison in GATE | Low — rarely asked in interviews |

---

### CN Level 2: Physical & Data Link Layer

**Theme:** How data actually moves across physical media and how frames are reliably delivered.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 2.1 | **Physical Layer — Signals & Transmission** | - Understand analog vs digital signals - Understand bandwidth, throughput, and latency - Apply Nyquist and Shannon theorems for channel capacity | **Signal visualizer:** An oscilloscope-style display showing a waveform. Users can toggle between analog (sine wave) and digital (square wave) signals. Sliders control frequency, amplitude, and noise level. As noise increases, the signal degrades visually. A Shannon capacity calculator: input bandwidth (B) and SNR (S/N ratio) sliders, and the maximum channel capacity C = B * log2(1 + S/N) computes in real-time with a gauge display. Nyquist calculator: input bandwidth and signal levels, shows sampling rate and maximum data rate. A visual comparison of baseband vs broadband transmission. | 2-3 marks — Nyquist/Shannon numerical problems | Low — physical layer rarely in interviews |
| 2.2 | **Framing & Error Detection** | - Understand framing: character count, flag bytes, bit stuffing - Implement error detection: parity, checksum, CRC - Understand Hamming distance and error correction basics | **Error detection visualizer:** A binary data stream (row of 0s and 1s). Parity: the system adds a parity bit at the end (even/odd parity toggle). An error injector lets users flip any bit — the receiver calculates parity and detects the error (flipped bit and parity mismatch flash red). CRC: the data polynomial is divided by a generator polynomial — long division animation plays step by step (XOR operations highlighted), producing the remainder which is appended. At the receiver, division by the same generator shows zero remainder (no error) or non-zero (error detected). Hamming code: data bits and redundancy bits are placed in specific positions (power of 2), each check bit covers certain positions (shown as color-coded groups). | 3-4 marks — CRC and Hamming code are GATE favorites | Low — not typically in interviews |
| 2.3 | **Data Link Layer Protocols — Stop & Wait, Go-Back-N, Selective Repeat** | - Understand ARQ protocols for reliable data transfer - Implement Stop-and-Wait ARQ - Implement Go-Back-N ARQ with sliding window - Implement Selective Repeat ARQ - Calculate efficiency and throughput | **ARQ protocol visualizer:** Sender and receiver as two vertical timelines (like a sequence diagram). Stop-and-Wait: sender sends frame (arrow from sender to receiver), waits for ACK (arrow back). Timeout shown as a ticking clock. If frame lost (user can click to simulate loss), timeout expires, frame is resent. Go-Back-N: sender has a window of N frames. Multiple arrows fly from sender to receiver. If frame k is lost, receiver discards subsequent frames (red X on receipt), and sender's window slides back to k — all frames from k onward are resent. Selective Repeat: similar, but only the lost frame is resent, receiver buffers out-of-order frames (buffer shown as slots). Window size slider (1 to 7). Efficiency formula calculated and displayed. | 3-4 marks — sliding window protocols heavily tested | Low — protocol-level details rarely in interviews |
| 2.4 | **Medium Access Control (MAC)** | - Understand the channel allocation problem - ALOHA (pure and slotted) - CSMA, CSMA/CD, CSMA/CA - Token Ring and Token Bus | **MAC protocol simulator:** Multiple nodes (4-6) arranged around a shared channel (a horizontal bus or circular ring). Pure ALOHA: nodes transmit at random times; when two transmissions overlap (animated bars on the channel overlap), a collision flash occurs and both nodes set random backoff timers (timer counts shown). Slotted ALOHA: time is divided into slots (vertical lines on the channel), transmissions align to slot boundaries. CSMA/CD: nodes "listen" (ear icon) before transmitting; if channel busy, they wait. If collision during transmission, both stop (jam signal), backoff, retry. CSMA/CA: RTS/CTS exchange before data (animated handshake arrows). A throughput graph plots successful frames vs offered load. | 2-3 marks — CSMA/CD and ALOHA in GATE | Low — MAC layer rarely in interviews |
| 2.5 | **Ethernet & LAN Standards** | - Understand Ethernet frame format - Understand MAC addresses and ARP - Switches vs hubs: collision domains and broadcast domains - VLAN concepts | **Ethernet frame dissector:** An Ethernet frame shown as a horizontal bar divided into colored segments: Preamble, Dest MAC, Src MAC, EtherType, Payload, FCS. Hovering each segment shows its size and purpose. ARP animation: Host A wants to send to Host B but only knows B's IP. A broadcasts an ARP request (animated broadcast to all nodes), B responds with its MAC (unicast arrow). Switch learning: a switch icon with a MAC table that populates as frames pass through — the table fills in (MAC → port) with each frame forwarded. Users can send frames between hosts and watch the switch's table build and forward decisions animate. | 1-2 marks — Ethernet and ARP basics | Low — networking fundamentals |

---

### CN Level 3: Network Layer

**Theme:** IP addressing, subnetting, and routing — the heart of the Internet.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 3.1 | **IPv4 Addressing & Classful Addressing** | - Understand 32-bit IPv4 address structure - Classify addresses: Class A, B, C, D, E - Understand special addresses: loopback, broadcast, private ranges - Convert between dotted decimal and binary | **IP address visualizer:** An IPv4 address shown in dotted decimal (e.g., 192.168.1.1) with each octet also displayed as 8 binary bits below. Users can click individual bits to toggle them and watch the dotted decimal update in real-time (or type a decimal address and watch bits update). Class boundaries are shown as color zones on a number line from 0.0.0.0 to 255.255.255.255. A "Classify" button highlights which class an address belongs to and shows the default subnet mask. Private address ranges are shown as reserved blocks on the number line. | 2-3 marks — IP addressing in GATE | Medium — networking knowledge expected |
| 3.2 | **Subnetting & CIDR** | - Perform subnetting: given IP and mask, find network, broadcast, host range, number of hosts - Understand CIDR notation (slash notation) - Design subnets for given requirements (VLSM) | **Subnetting calculator visualizer:** Input: IP address and subnet mask (or CIDR prefix). Output: a visual breakdown showing the 32 bits divided into network portion (blue) and host portion (green) with sliding boundary. The network address, broadcast address, first usable host, last usable host, and number of hosts are computed and displayed. A "subnet map" shows the address space as a block diagram with the subnet highlighted within its parent network. VLSM mode: users define required subnet sizes, and the tool allocates subnets optimally, showing the allocation as a space-partitioning diagram (like a memory allocation visualizer). All outputs update in real-time as users modify inputs. | 4-5 marks — subnetting is one of the highest-weighted CN GATE topics | High — subnetting knowledge expected in network engineering interviews |
| 3.3 | **IP Routing & Forwarding** | - Understand routing table structure and longest prefix matching - Distinguish between static and dynamic routing - Understand routing algorithms: distance vector vs link state | **Routing table visualizer:** A network graph with routers and hosts. Each router has a routing table visible on hover. When a packet is sent from source to destination, the packet (animated dot) arrives at each router, the routing table highlights the matching entry (longest prefix match), and the packet is forwarded to the next hop — the path traces across the network. Users can modify routing table entries to see how the packet's path changes. For distance-vector: Bellman-Ford animation shows routers exchanging distance vectors with neighbors, tables converging over rounds. For link-state: each router floods LSA packets (animated broadcast), builds a complete topology map, and runs Dijkstra's (link to DSA Level 4.4 visualization). | 3-4 marks — routing algorithms in GATE | Medium — routing concepts for system design |
| 3.4 | **IPv6 Basics** | - Understand why IPv6 is needed (address exhaustion) - Understand 128-bit address format and shorthand notation - Key differences from IPv4 (no broadcast, no NAT needed, mandatory IPsec) - Transition mechanisms: dual stack, tunneling, NAT64 | **IPv4 vs IPv6 comparison panel:** Side-by-side address displays. IPv4: 32 bits in dotted decimal. IPv6: 128 bits in colon-hex, with rules for zero compression (::) demonstrated interactively — users type an IPv6 address and watch the tool apply/remove shorthand. An "address space" visualization: a tiny dot for IPv4's 4.3 billion addresses vs a massive area for IPv6. Transition animation: dual-stack mode shows a packet with both IPv4 and IPv6 headers, tunneling shows an IPv6 packet wrapped inside an IPv4 packet (header encapsulation animation). | 1-2 marks — IPv6 basics occasionally | Low — less common in interviews |
| 3.5 | **NAT, ICMP & ARP** | - Understand Network Address Translation (NAT) and PAT - Understand ICMP message types (echo request/reply, destination unreachable, TTL exceeded) - Understand ARP request/reply process and ARP table | **NAT translation visualizer:** A private network (multiple hosts with private IPs) connected to the Internet through a NAT router. When a host sends a packet, the NAT table shows the translation (private IP:port → public IP:port) with an animated rewrite of the packet header as it crosses the NAT. Return traffic shows the reverse translation. ICMP: a ping operation animates — echo request packet travels to destination, echo reply returns, round-trip time is computed and shown. Traceroute: packets with increasing TTL values — each router that receives a TTL=0 packet sends back ICMP Time Exceeded, mapping the path hop by hop. | 2-3 marks — NAT and ICMP in GATE | Medium — NAT concepts for system design |

---

### CN Level 4: Transport Layer

**Theme:** Reliable data transfer with TCP, fast delivery with UDP, and the mechanics of flow/congestion control.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 4.1 | **TCP — Connection Management** | - Understand TCP 3-way handshake (SYN, SYN-ACK, ACK) - Understand 4-way connection termination (FIN, ACK, FIN, ACK) - Understand TCP header format - Understand sequence numbers and acknowledgment numbers | **TCP handshake visualizer:** Client and server as two vertical timelines (sequence diagram style). 3-way handshake: SYN arrow from client to server (showing seq=x), SYN-ACK arrow from server to client (seq=y, ack=x+1), ACK arrow from client to server (ack=y+1). Each arrow is labeled with flags and sequence/ack numbers. Timers tick on both sides. The handshake completes and a "CONNECTION ESTABLISHED" banner appears. 4-way termination: FIN/ACK arrows with TIME_WAIT state shown on the client (timer counting down). Users can simulate: SYN loss (timeout + retransmit), simultaneous open, RST (abrupt close). TCP header: a visual diagram of the TCP header with each field labeled and clickable for details. | 3-4 marks — TCP handshake is a GATE favorite | High — TCP knowledge expected in system design interviews |
| 4.2 | **TCP — Reliable Data Transfer** | - Understand sequence numbers, acknowledgments, and retransmission - Understand cumulative vs selective acknowledgment - Timeout calculation (EWMA of RTT) - Fast retransmit (triple duplicate ACK) | **TCP reliable transfer visualizer:** Sender and receiver timelines. Sender transmits segments (numbered arrows). Receiver sends ACKs (return arrows with ack numbers). Normal case: smooth ping-pong. Lost segment: one arrow disappears mid-flight (red X), subsequent ACKs are duplicates (same ack number, stacking up on sender side). After 3 duplicate ACKs, fast retransmit fires — the lost segment is resent (bold arrow). Timeout retransmit: a clock counts down on the sender side; when it expires, the segment resends. RTT estimation: a formula display shows EWMA computation with each sample. Users can inject segment/ACK losses and watch recovery. | 2-3 marks — TCP retransmission in GATE | Medium — important for system design understanding |
| 4.3 | **TCP — Flow Control & Congestion Control** | - Understand receiver's advertised window and flow control mechanism - Understand TCP congestion control: slow start, congestion avoidance, fast recovery - Understand TCP Tahoe vs Reno vs Cubic - AIMD (Additive Increase Multiplicative Decrease) | **TCP congestion window visualizer:** A graph with X-axis = time (or round trip number) and Y-axis = congestion window size (cwnd). Slow start: cwnd doubles each RTT (exponential growth curve). When ssthresh is reached: congestion avoidance begins (linear growth, +1 per RTT). On triple duplicate ACK (Reno): cwnd halves (sharp drop), then linear growth resumes (fast recovery). On timeout (Tahoe): cwnd drops to 1, ssthresh halves, slow start restarts. The graph draws in real-time as events occur. Users can trigger events (loss via timeout, loss via 3 dup ACKs) and see the cwnd graph respond. A "Reno vs Tahoe" toggle shows different behaviors. Separate flow control panel shows receiver window and sender adjusting transmission rate. | 3-4 marks — congestion control is a top GATE CN topic | Medium — understanding TCP behavior for system design |
| 4.4 | **UDP — User Datagram Protocol** | - Understand UDP header format (minimal: src port, dest port, length, checksum) - Compare TCP vs UDP: when to use which - Applications: DNS, streaming, gaming, VoIP - Understand UDP-based protocols: QUIC | **TCP vs UDP comparison visualizer:** Split screen. Left (TCP): segments travel with sequence numbers, ACKs return, lost segments retransmit — reliable but slower (elapsed time counter). Right (UDP): datagrams fire and forget, no ACKs, lost datagrams are gone forever — faster (lower elapsed time) but unreliable (counter shows lost data %). Users can adjust packet loss rate with a slider and see how TCP recovers (slower but complete) while UDP just loses data (faster but incomplete). Application matcher: drag application icons (video call, file download, DNS query, online game) to TCP or UDP side based on their needs. | 1-2 marks — TCP vs UDP comparison | Medium — understanding when to use TCP vs UDP |
| 4.5 | **Port Numbers & Multiplexing** | - Understand well-known ports (0-1023), registered (1024-49151), ephemeral (49152-65535) - Understand how TCP/UDP multiplexing works using port numbers - Socket: IP + Port combination | **Multiplexing visualizer:** A server with multiple services (HTTP on 80, SSH on 22, SMTP on 25, DNS on 53) shown as labeled doors on a building. Multiple clients connect — each connection is a colored line from client (random ephemeral port) to server (specific service port). When data arrives at the server, the Transport layer reads the destination port and routes the data to the correct "door" (demultiplexing animation). A socket table shows all active connections (src IP:port → dest IP:port, protocol). Users can initiate connections and see the multiplexing table update. | 1 mark — port number knowledge | Low — basic networking |

---

### CN Level 5: Application Layer

**Theme:** Protocols that power the modern Internet — HTTP, DNS, email, and more.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 5.1 | **DNS — Domain Name System** | - Understand DNS hierarchy (root, TLD, authoritative, recursive resolver) - Trace a DNS resolution: recursive vs iterative queries - Understand DNS record types: A, AAAA, CNAME, MX, NS, TXT - DNS caching and TTL | **DNS resolution visualizer:** A hierarchy tree shows root servers (.), TLD servers (.com, .org), and authoritative servers (example.com). A client at the bottom sends a query for "www.example.com". Recursive resolution: the query goes to a recursive resolver, which queries root (animated arrow up), receives TLD referral (arrow to .com server), queries TLD, receives authoritative referral, queries authoritative, receives IP address, returns to client. Each step shows the DNS message with question/answer sections. Iterative: the client makes each query itself. A cache panel shows entries being stored with TTL timers counting down. Users can query different domains and see the resolution path change. | 2-3 marks — DNS resolution in GATE | High — DNS is a common system design interview topic |
| 5.2 | **HTTP — HyperText Transfer Protocol** | - Understand HTTP request/response format - HTTP methods: GET, POST, PUT, DELETE, PATCH - Status codes: 2xx, 3xx, 4xx, 5xx - HTTP/1.1 vs HTTP/2 vs HTTP/3 differences | **HTTP request/response visualizer:** Client (browser) and server (web server) with a connection between them. User types a URL; the GET request builds visually (request line, headers, body) and flies to the server. Server processes and sends back a response (status line, headers, body) that builds and flies back. HTTP/1.1 mode: requests are sequential (head-of-line blocking visible as waiting arrows). HTTP/2 mode: multiple streams shown as colored parallel arrows through a single connection. HTTP/3: QUIC-based, even more parallel. A "build your request" panel lets users craft custom HTTP requests (method, path, headers) and see the formatted request/response. Status code reference cards are clickable for each category. | 2-3 marks — HTTP basics in GATE | High — HTTP is the most-asked networking topic in interviews |
| 5.3 | **SMTP, FTP & Email Protocols** | - Understand SMTP for sending email - Understand POP3 and IMAP for receiving email - Understand FTP: control connection (port 21) and data connection (port 20) - Active vs passive FTP | **Email journey visualizer:** An animated email lifecycle: user composes email in MUA (mail client), SMTP sends to sender's mail server (MTA), mail server relays via SMTP to recipient's mail server, recipient retrieves via POP3 (download, remove from server) or IMAP (sync, keep on server). Each hop shows the protocol name and message format. FTP visualizer: shows two connections (control on port 21, data on port 20) between client and server. Control connection exchanges commands (USER, PASS, LIST, RETR) while data connection transfers file bytes — the dual connection is visually distinct. Active vs passive: in active, server initiates data connection (arrow from server); in passive, client initiates (arrow from client). | 1-2 marks — SMTP/FTP basics | Low — rarely in interviews |
| 5.4 | **DHCP & Network Configuration** | - Understand DHCP DORA process (Discover, Offer, Request, Acknowledge) - Understand IP address leasing and renewal - Understand how devices join a network automatically | **DHCP DORA visualizer:** A new device joins a network. Step 1 — DISCOVER: device broadcasts a "DHCP Discover" message (animated broadcast wave from device to all). Step 2 — OFFER: DHCP server responds with an IP offer (unicast arrow). Step 3 — REQUEST: device requests the offered IP (broadcast to all servers in case multiple offered). Step 4 — ACKNOWLEDGE: server confirms (unicast). After completion, the device's IP address, subnet mask, gateway, and DNS server appear in a configuration card. A lease timer starts counting. Users can add multiple DHCP servers and see the selection process. | 1-2 marks — DHCP process in GATE | Low — DHCP rarely in interviews |

---

### CN Level 6: Network Security

**Theme:** Encryption, authentication, and the protocols that secure the Internet.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 6.1 | **Cryptography Basics** | - Understand symmetric vs asymmetric encryption - Understand Caesar cipher, substitution cipher (classical) - Understand AES (symmetric) and RSA (asymmetric) at a high level - Understand key distribution problem | **Encryption visualizer:** A plaintext message displayed as readable text. Symmetric encryption: user selects a key, the message encrypts character by character (each character morphs into a cipher character with animation). The same key decrypts. Asymmetric: two keys shown (public = green, private = red). Message encrypted with public key (lock animation), only private key can decrypt (unlock animation). Caesar cipher: a rotating alphabet wheel physically rotates by the key amount. RSA: simplified demonstration showing the math of key generation (p, q, n, phi, e, d) with each step computed interactively. | 2-3 marks — cryptography basics in GATE | Medium — security fundamentals for interviews |
| 6.2 | **TLS/SSL — Secure Communication** | - Understand TLS handshake process - Understand certificates, Certificate Authorities (CA), and chain of trust - Understand HTTPS = HTTP + TLS - TLS 1.2 vs TLS 1.3 differences | **TLS handshake visualizer:** Client and server sequence diagram. ClientHello (supported cipher suites), ServerHello (chosen suite + certificate), client verifies certificate (chain of trust animation: certificate → intermediate CA → root CA, each link verified), client generates pre-master secret, encrypts with server's public key, both derive session keys. "Change Cipher Spec" messages exchange, then data flows encrypted (data arrows are now "locked" with a padlock icon). TLS 1.3: the handshake is shorter (1-RTT), visually shown as fewer arrows. Certificate trust chain: a vertical chain of certificates, each signed by the one above, root CA at the top marked as "trusted". | 2-3 marks — TLS/SSL in GATE | High — HTTPS and TLS are common interview topics |
| 6.3 | **Firewalls & VPN** | - Understand packet-filter firewall, stateful inspection, and application-level gateway - Understand VPN: tunneling, IPSec, and SSL VPN - Understand DMZ (demilitarized zone) architecture | **Firewall rule visualizer:** A network with internal hosts, a firewall, and external hosts. Firewall has a rule table (source IP, dest IP, port, action: allow/deny). Packets from external hosts travel toward the firewall; each packet is compared against rules (row-by-row highlight in the rule table). If a rule matches, the action is applied (green check = allow, red X = deny) and the packet either passes through or is blocked with an animation. VPN: a tunnel shown as a colored tube between two sites through the public Internet. Packets entering the tunnel are encrypted (packet gets wrapped in an outer header), travel through the public Internet, and are decrypted at the other end. | 1-2 marks — firewall concepts in GATE | Medium — VPN and firewall concepts for system design |
| 6.4 | **Network Attacks & Defenses** | - Understand common attacks: DoS/DDoS, MITM, IP spoofing, DNS poisoning, ARP spoofing - Understand defenses: IDS/IPS, rate limiting, DNSSEC - Understand phishing and social engineering | **Attack simulation visualizer:** For DDoS: multiple malicious nodes (botnet) send a flood of packets to a target server — the server's capacity bar fills up and turns red (service unavailable). Rate limiting defense: a shield icon activates and starts dropping excess packets. For MITM: attacker positions between client and server, intercepting and modifying packets (packets diverted through attacker node). For ARP spoofing: attacker sends false ARP replies, and the ARP table of the victim updates with the wrong MAC (shown in the table turning red). For DNS poisoning: attacker injects a false DNS response, and the victim resolves the domain to the attacker's IP (wrong IP highlighted in red). | 1-2 marks — security concepts in GATE | Medium — security awareness for interviews |

---

### CN Level 7: Advanced Networking

**Theme:** Modern networking paradigms — SDN, CDN, cloud networking, and the future of the Internet.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 7.1 | **Software-Defined Networking (SDN)** | - Understand the SDN architecture: data plane, control plane, application plane - Understand OpenFlow protocol basics - Understand benefits: programmability, centralized control, flexibility | **SDN architecture visualizer:** Traditional networking shown first: each router has its own control plane (brain icon inside each router). SDN transformation: brain icons lift out of routers and consolidate into a central SDN controller (animated merge). The controller communicates with switches via OpenFlow (control arrows). An application at the top sends instructions to the controller, which programs flow rules into switches. Users can modify flow rules in the controller and watch how packet forwarding changes across the network. | 1 mark — SDN concept occasionally in GATE | Medium — SDN concepts for system design interviews |
| 7.2 | **Content Delivery Networks (CDN)** | - Understand CDN purpose: reduce latency, improve availability - Understand how CDN works: edge servers, origin server, cache - Understand DNS-based CDN routing - Popular CDNs: Cloudflare, Akamai, AWS CloudFront | **CDN visualizer:** A world map with an origin server (single location) and CDN edge servers (multiple locations globally). A user in a distant location requests content. Without CDN: request travels all the way to the origin (long animated path, high latency counter). With CDN: DNS resolves to the nearest edge server, request goes to a nearby edge (short path, low latency). Cache hit: edge serves directly (fast). Cache miss: edge fetches from origin, caches, then serves (first request slow, subsequent fast). Users can click different user locations to see the nearest edge server selection change. | 1 mark — CDN concept occasionally | High — CDN is a critical system design interview topic |
| 7.3 | **Cloud Networking & Virtualization** | - Understand virtual networks, VPC, and software-defined networking in the cloud - Understand load balancing (round-robin, least connections, IP hash) - Understand auto-scaling and availability zones | **Cloud network visualizer:** A VPC shown as a bounded region containing subnets (public + private). A load balancer sits at the entry, distributing traffic to multiple server instances. Round-robin: traffic arrows alternate between servers in sequence. Least connections: server with fewest active connections gets the next request (connection counters shown). Auto-scaling: when server CPU gauges hit threshold, a new server instance spawns (animated appearance) and the load balancer starts routing to it. Availability zones shown as separate regions with cross-zone replication arrows. Users can simulate traffic spikes and watch the system scale. | 0-1 marks — cloud networking rarely in GATE | Very high — cloud networking is a top system design interview topic |
| 7.4 | **WebSockets, gRPC & Modern Protocols** | - Understand WebSocket: full-duplex communication over TCP - Understand gRPC: Protocol Buffers, HTTP/2 streams - Understand server-sent events (SSE) - Compare REST vs WebSocket vs gRPC | **Protocol comparison visualizer:** Three panels showing the same chat application implemented with: REST polling (repeated request-response arrows at intervals, wasted requests when no new data), WebSocket (initial HTTP upgrade handshake, then bidirectional arrows flow freely — push notifications from server appear instantly), SSE (server pushes events through a single long-lived connection, client receives only). A latency/bandwidth comparison graph shows REST's overhead vs WebSocket's efficiency vs SSE's one-way efficiency. gRPC panel shows Protocol Buffer message encoding (compact binary vs JSON text comparison). | 0-1 marks — modern protocols rarely in GATE | Very high — WebSocket, gRPC are common system design topics |

---

## 6. Detailed Curriculum — Operating Systems (OS)

### OS Level 1: Foundations

**Theme:** What is an operating system, and how do processes work?

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 1.1 | **What is an Operating System?** | - Define OS and its roles: resource manager, interface provider, security enforcer - Understand kernel mode vs user mode - Types of OS: batch, multi-programmed, time-sharing, real-time, distributed | **OS role visualizer:** A layered diagram: hardware at the bottom, kernel in the middle, user applications on top. Arrows show applications making system calls to the kernel (doorway from user space to kernel space). When an application requests a resource (CPU, memory, file), the kernel mediates — resource allocation animation shows the kernel routing the request. A mode toggle demonstrates kernel mode (full hardware access, lock icon open) vs user mode (restricted, lock icon closed). A timeline shows different OS types: batch (sequential job processing), multi-programmed (multiple jobs in memory, CPU switches between them), time-sharing (rapid context switching creating illusion of parallelism). | 1 mark — OS concept basics | Low — foundational |
| 1.2 | **Processes & Process States** | - Define process vs program - Understand process states: new, ready, running, waiting, terminated - Understand Process Control Block (PCB) - Understand context switching | **Process state diagram visualizer:** A state transition diagram with 5 states (circles) and transition arrows between them. A "process" token (colored dot) starts at "new", transitions to "ready" (admitted), to "running" (scheduled), potentially to "waiting" (I/O request), back to "ready" (I/O complete), and eventually to "terminated" (exit). Users can click transition arrows to move the process token, and each transition triggers a description of what causes it. Multiple processes can be added (different colored tokens), showing how multiple processes share the state diagram simultaneously. A PCB card shows the current state, PID, registers, program counter for each process. Context switch: two PCBs swap — one saves registers (values fade out to memory), the other restores (values load from memory). | 2-3 marks — process state transitions in GATE | Medium — process concepts for interviews |
| 1.3 | **System Calls** | - Understand system call as the OS interface - Categories: process control, file management, device management, information maintenance, communication - Understand system call execution: user mode → kernel mode trap → execute → return | **System call visualizer:** A split view: top half is "user space" (application code), bottom half is "kernel space" (OS code). When the application calls fork(), open(), read(), or write(), an animated arrow (trap) crosses the boundary from user to kernel. The kernel processes the request (highlighted function in kernel code), generates a result, and returns (arrow crosses back). A "mode bit" indicator switches between "User Mode (1)" and "Kernel Mode (0)" with each transition. Users can select different system call categories and trigger them, seeing the trap-execute-return cycle. A system call table shows the mapping from call name to call number. | 2-3 marks — system calls in GATE | Medium — understanding of system calls expected |
| 1.4 | **Threads & Multithreading** | - Understand thread vs process (shared memory space) - User-level threads vs kernel-level threads - Multithreading models: many-to-one, one-to-one, many-to-many - Benefits of multithreading: responsiveness, resource sharing, scalability | **Thread visualizer:** A process shown as a large container (address space). Within it, multiple threads are shown as parallel execution lines, each with its own stack but sharing code, data, and heap sections. When one thread accesses shared data, the access is shown as an arrow to the shared region. Thread creation: a new execution line forks from an existing one with a splitting animation. Multithreading models: many-to-one shows N user threads mapped to 1 kernel thread (a funnel); one-to-one shows 1:1 parallel lines; many-to-many shows M:N with a flexible mapping layer between them. Users can create/terminate threads and see resource sharing. | 2-3 marks — threads in GATE | High — threading concepts are common in interviews |
| 1.5 | **Inter-Process Communication (IPC)** | - Understand shared memory IPC - Understand message passing (direct and indirect) - Pipes: ordinary and named - Understand producer-consumer problem with IPC | **IPC visualizer:** Two processes (boxes) with an IPC mechanism between them. Shared memory: an overlapping region between the two process boxes where both can read/write (data items move into the shared region from one process and are read by the other). Message passing: a mailbox/channel between processes, messages (envelope icons) travel from sender to receiver. Pipe: a one-way pipe (tube) connects process output to process input, data flows through the tube. Named pipe: similar but with a name label and bidirectional capability. Producer-consumer: a bounded buffer (fixed-size queue) between producer (adds items) and consumer (removes items). Buffer fullness meter shows when producer must wait (full) or consumer must wait (empty). | 2-3 marks — IPC mechanisms in GATE | Medium — IPC concepts for interviews |

---

### OS Level 2: Process Management & Scheduling

**Theme:** How the OS decides which process gets the CPU and for how long.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 2.1 | **CPU Scheduling Concepts** | - Understand scheduling criteria: CPU utilization, throughput, turnaround time, waiting time, response time - Understand preemptive vs non-preemptive scheduling - Understand scheduling queues: ready queue, device queues | **Scheduling metrics dashboard:** A panel showing definitions and formulas for each metric. Below, an interactive example: a set of processes with arrival times and burst times. As the user selects a scheduling algorithm (from a dropdown), the Gantt chart (see next lessons) updates and all metrics (average turnaround, average waiting, throughput, CPU utilization) compute and display in a dashboard. Users can add/remove/modify processes and see metrics recalculate in real-time. A "best metric" indicator highlights which algorithm wins for each criterion. | 2-3 marks — scheduling metric calculations in GATE | Medium — scheduling concepts for interviews |
| 2.2 | **FCFS & SJF Scheduling** | - Implement First-Come, First-Served scheduling - Implement Shortest Job First (non-preemptive) - Implement Shortest Remaining Time First (preemptive SJF) - Analyze convoy effect in FCFS | **Gantt chart builder — FCFS & SJF:** A timeline (horizontal bar) at the top. Processes are colored blocks that fill the timeline. FCFS: processes execute in arrival order — blocks lay down left to right. If a long process goes first, subsequent short processes wait (convoy effect — long gray waiting bars visible). SJF (non-preemptive): at each scheduling decision point, the shortest burst in the ready queue is selected (the ready queue is shown below, sorted by burst time). SRTF (preemptive): a running process can be preempted if a new arrival has shorter remaining time — the Gantt chart shows preemption points as block boundaries. A process table below shows arrival, burst, completion, turnaround, and waiting times for each process, computed in real-time. Users input their own processes. | 3-4 marks — FCFS/SJF scheduling problems are GATE favorites | Medium — scheduling algorithm questions |
| 2.3 | **Round Robin Scheduling** | - Implement Round Robin with configurable time quantum - Understand the effect of time quantum size on performance - Compare RR with FCFS and SJF | **Gantt chart builder — Round Robin:** Same timeline format. A time quantum slider (1 to 10 units). The ready queue is shown as a circular queue. The first process in the queue executes for one quantum (colored block fills the timeline for that duration). If it finishes, it leaves. If not, its remaining burst decrements, and it re-enters the back of the ready queue — the process block in the queue animates moving from front to back. The Gantt chart shows alternating colored blocks as processes take turns. Users can adjust the quantum and watch the Gantt chart and metrics change. Extreme cases: quantum = 1 (maximum context switching, approaches processor sharing) and quantum = infinity (becomes FCFS). Context switch overhead toggle adds a small overhead per switch. | 3-4 marks — RR scheduling is a GATE staple | Medium — RR scheduling questions |
| 2.4 | **Priority Scheduling & Multilevel Queue** | - Implement priority scheduling (preemptive and non-preemptive) - Understand starvation and aging as a solution - Understand multilevel queue scheduling - Understand multilevel feedback queue scheduling | **Priority Gantt chart & multilevel queue visualizer:** Priority scheduling: each process has a priority number. The ready queue is sorted by priority. The highest-priority process runs first. Starvation: a low-priority process visually waits forever (its waiting time counter turns red, "starved!" label). Aging: a timer periodically increments low-priority process priorities (priority number decreasing with upward arrow animation), eventually promoting them. Multilevel queue: multiple separate ready queues (foreground/background) shown as stacked horizontal lanes, each with its own scheduling algorithm. Multilevel feedback queue: processes can move between queues based on behavior — a process that uses too much CPU moves down (demotion arrow), one that waits for I/O moves up (promotion arrow). | 2-3 marks — priority scheduling in GATE | Medium — scheduling concepts |
| 2.5 | **Process Creation & Termination** | - Understand fork() system call and process tree - Understand exec() system call and process replacement - Understand wait() and zombie/orphan processes - Process tree hierarchy | **Process tree visualizer:** The init/systemd process sits at the root. When fork() is called, a child process node splits from the parent (branching animation). The child is a copy of the parent (same label initially), then exec() replaces its image (label changes with a morph animation). wait(): parent process dims (blocking) until child terminates (child fades out, parent resumes). Zombie process: terminated child that hasn't been wait()-ed by parent shown as a grayed-out ghost node with "Z" state. Orphan process: parent terminates first, child's parent pointer re-attaches to init (animated reparenting arrow). Users can trigger fork/exec/exit/wait and build process trees interactively. | 2-3 marks — fork() and process creation in GATE | Medium — fork() behavior is a classic interview question |

---

### OS Level 3: Process Synchronization

**Theme:** Mutual exclusion, deadlock, and the classic synchronization problems.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 3.1 | **The Critical Section Problem** | - Understand race conditions and critical sections - Requirements: mutual exclusion, progress, bounded waiting - Peterson's solution for 2 processes - Hardware solutions: test-and-set, compare-and-swap | **Race condition visualizer:** Two processes (colored threads) access a shared variable (displayed as a large counter in the center). Without synchronization: both read the same value, increment independently, and write back — the counter shows the wrong value (expected: 2, actual: 1). The interleaving is shown on a timeline with read/write operations from each process. Peterson's solution: flag and turn variables shown as labeled boxes. The entry section checks flags and turn with animated evaluation (condition checking → green/red), ensuring only one process enters the critical section at a time. With synchronization: the counter correctly reaches the expected value. | 3-4 marks — critical section and synchronization are heavily tested | High — race conditions and synchronization in interviews |
| 3.2 | **Semaphores** | - Understand counting semaphore and binary semaphore - Implement wait (P) and signal (V) operations - Solve producer-consumer with semaphores - Understand semaphore implementation and busy waiting vs blocking | **Semaphore visualizer:** A semaphore shown as a gate with a counter. Processes approach the gate. wait(): counter decrements; if counter >= 0, process passes through (gate opens). If counter < 0, process joins a waiting queue (processes line up behind the gate). signal(): counter increments; if processes are waiting, one is released from the queue (gate opens for one). Producer-consumer: a bounded buffer (array of slots) between producer and consumer. Three semaphores (empty, full, mutex) are shown as three separate gates. Producer waits on empty (slot available?), waits on mutex (exclusive access), adds item, signals mutex, signals full. Consumer does the reverse. The buffer visually fills and empties. | 3-4 marks — semaphore problems are GATE staples | High — semaphore concepts in interviews |
| 3.3 | **Classic Synchronization Problems** | - Solve Dining Philosophers problem - Solve Readers-Writers problem - Solve Sleeping Barber problem - Understand monitor-based solutions | **Dining Philosophers visualizer:** A circular table with 5 philosopher nodes and 5 fork nodes between them. Each philosopher cycles through: thinking (blue), hungry (yellow), eating (green). When hungry, a philosopher attempts to pick up left and right forks (fork highlights). If both available: eating. If one is taken by a neighbor: waiting (deadlock potential). Deadlock scenario: all 5 pick up left fork simultaneously — all hold one fork, all wait for the other (red deadlock indicator, table flashes). Solutions animated: odd/even pickup order, semaphore-based, monitor-based. Readers-Writers: a shared database (book icon) with reader processes (eye icons) and writer processes (pen icons). Multiple readers can access simultaneously, but a writer needs exclusive access. Semaphore-controlled entry/exit animations. | 3-4 marks — dining philosophers and readers-writers are GATE classics | High — classic synchronization problems in interviews |
| 3.4 | **Deadlock — Detection & Prevention** | - Understand four necessary conditions: mutual exclusion, hold & wait, no preemption, circular wait - Resource Allocation Graph (RAG) and cycle detection - Deadlock prevention strategies (breaking each condition) - Deadlock avoidance vs detection vs prevention | **Resource Allocation Graph visualizer:** Processes (circles) and resources (rectangles with dots for instances). Assignment edges (resource → process, solid arrow) and request edges (process → resource, dashed arrow). Users add processes and resources, draw edges. The system checks for cycles in real-time. If a cycle is detected: the cycle path highlights in red, "DEADLOCK!" banner appears. If no cycle: "No deadlock" in green. For multi-instance resources: the RAG is insufficient — switches to the Banker's algorithm (next lesson). Prevention strategies: users can select which condition to break and see how the graph changes to prevent deadlock. | 3-4 marks — deadlock RAG and conditions are GATE staples | High — deadlock is a common OS interview topic |
| 3.5 | **Banker's Algorithm** | - Implement Banker's algorithm for deadlock avoidance - Understand safe state and safe sequence - Compute Available, Max, Allocation, Need matrices - Determine if a request can be safely granted | **Banker's algorithm step-through visualizer:** Four matrices displayed: Available (1D), Max (2D), Allocation (2D), Need (2D). The algorithm runs: for each process, check if Need[i] <= Available. If yes, the process can finish — it "releases" its resources (Allocation[i] adds to Available, animated counter increment). The process is added to the safe sequence (displayed as an ordered list). Repeat until all processes are in the safe sequence (safe state, green) or no process can proceed (unsafe state, red). Users can modify the matrices and test different scenarios. A "resource request" panel lets users simulate a process requesting additional resources — the algorithm checks if granting the request leads to a safe state. | 3-4 marks — Banker's algorithm is a GATE favorite | Medium — Banker's algorithm occasionally in interviews |

---

### OS Level 4: Memory Management

**Theme:** How the OS manages RAM — from simple partitioning to virtual memory.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 4.1 | **Memory Partitioning & Allocation** | - Understand contiguous memory allocation - Fixed partitioning vs variable partitioning - Allocation strategies: first fit, best fit, worst fit - External fragmentation and compaction | **Memory allocation visualizer:** A vertical bar representing RAM. Partitions are colored blocks within the bar. Fixed partitioning: RAM divided into equal-sized blocks. Processes (different sizes) are placed into partitions — if a process is smaller than the partition, internal fragmentation is shown as gray unused space within the block. Variable partitioning: processes take exactly the space they need. As processes arrive and depart, holes (free blocks, hatched pattern) appear. First fit: the allocator scans from top, highlights each hole, places the process in the first hole large enough. Best fit: all holes highlight, the smallest sufficient hole is selected. Worst fit: the largest hole is selected. External fragmentation: many small holes scattered. Compaction: all processes slide together with animation, consolidating free space. | 3-4 marks — memory allocation strategies in GATE | Medium — memory concepts for interviews |
| 4.2 | **Paging** | - Understand page table: logical page → physical frame mapping - Calculate physical address from logical address using page table - Understand page table entry (PTE) structure - Understand internal fragmentation in paging | **Paging address translation visualizer:** Left side: logical address space divided into pages (numbered, colored blocks). Right side: physical memory divided into frames (numbered, some colored to match pages, some empty). A page table in the center maps page number → frame number. User types a logical address (e.g., page 2, offset 100). The animation: extract page number from address (upper bits highlight), look up page table (row highlights), get frame number, combine with offset to form physical address (lower bits pass through). The physical address points to the correct byte in physical memory (highlighted cell). Users can modify the page table mapping and see addresses resolve differently. Page size slider (512B, 1KB, 4KB) shows how address bits are split between page number and offset. | 4-5 marks — paging address translation is one of the highest-weighted OS GATE topics | High — paging concepts in interviews |
| 4.3 | **Page Replacement Algorithms** | - Implement FIFO page replacement - Implement LRU (Least Recently Used) - Implement Optimal page replacement - Understand Belady's anomaly (FIFO) - Calculate page faults for a given reference string | **Page replacement visualizer:** A reference string (sequence of page numbers) scrolls at the top. Below: a set of page frames (configurable count: 1 to 5). For each page reference: if the page is in a frame (hit), the frame glows green and a "HIT" counter increments. If not (miss/fault), the algorithm selects a victim frame: FIFO (oldest frame), LRU (least recently used frame, timestamp-based), Optimal (frame not needed for the longest time in the future). The victim frame's content fades out, new page slides in. A "FAULT" counter increments. At the end, hit ratio = hits/total is displayed. Users input their own reference string and frame count. A comparison mode runs all three algorithms side by side on the same input. Belady's anomaly: a specific reference string where FIFO with 4 frames has more faults than with 3 frames — the comparison makes this visually obvious. | 4-5 marks — page replacement is a GATE favorite | High — page replacement concepts in interviews |
| 4.4 | **Virtual Memory** | - Understand demand paging: pages loaded only when needed - Understand page fault handling: trap → OS → load page → restart instruction - Understand effective access time (EAT) calculation - Understand thrashing: causes and working set model | **Virtual memory visualizer:** A process's virtual address space (much larger than physical memory) on the left, physical memory (smaller) on the right, and disk (swap space) at the bottom. Initially, most pages are on disk (gray in virtual space). When a page is accessed, if it's in a frame (valid bit = 1, in page table), fast access (green arrow). If not (valid bit = 0, page fault): trap animation (red flash), OS loads the page from disk to a free frame (animated block moving from disk to RAM), page table updates (new entry row), instruction restarts. Thrashing: many page faults per second — a graph shows CPU utilization vs degree of multiprogramming, with the thrashing cliff point marked. Working set: recent page accesses highlighted, showing the working set size. | 3-4 marks — virtual memory and demand paging in GATE | Medium — virtual memory concepts for interviews |
| 4.5 | **TLB (Translation Lookaside Buffer)** | - Understand TLB as a cache for page table entries - TLB hit vs TLB miss process - Calculate effective access time with TLB - Understand TLB flush on context switch | **TLB address translation visualizer:** The paging visualizer extended with a TLB cache between the CPU and page table. On address translation: CPU first checks TLB (small, fast, associative lookup — all entries checked in parallel, highlighted simultaneously). TLB hit (90%+ of the time): frame number returned instantly, page table not consulted (fast path, green arrow). TLB miss: page table is accessed (slower path, yellow arrow), and the result is loaded into the TLB (new entry replaces old via LRU policy). EAT calculator: input TLB hit ratio and access times, computes EAT = hit_ratio * (TLB_time + mem_time) + (1 - hit_ratio) * (TLB_time + 2 * mem_time). Context switch: all TLB entries flush (clear animation) because the new process has a different page table. | 3-4 marks — TLB and EAT calculation in GATE | Medium — TLB concepts for interviews |

---

### OS Level 5: File Systems

**Theme:** How the OS organizes, stores, and retrieves files on persistent storage.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 5.1 | **File System Concepts** | - Understand file attributes, operations, and access methods (sequential, direct, indexed) - Understand directory structures: single-level, two-level, tree, acyclic graph - File system mounting | **Directory tree visualizer:** A tree structure representing the file system hierarchy. Root (/) at the top, directories branch down, files are leaves. Users can create directories and files by clicking (mkdir, touch), rename, delete (rm, rmdir). Access methods: sequential access animates a pointer moving through a file from beginning to end (like a tape). Direct access animates jumping to any block (random access). Indexed access shows an index table pointing to data blocks. Tree vs acyclic graph: in the tree, each file has one path. In the acyclic graph, a file can be reached from multiple directories (hard links shown as multiple arrows pointing to the same file node, symlinks shown as dashed arrows). | 1-2 marks — file system concepts in GATE | Low — file systems rarely in interviews |
| 5.2 | **File Allocation Methods** | - Understand contiguous allocation, linked allocation, indexed allocation - Analyze fragmentation, access time, and space overhead for each - FAT (File Allocation Table) as linked allocation variant | **File allocation visualizer:** Disk shown as a grid of blocks (numbered cells). Contiguous: file occupies consecutive blocks (highlighted in one color). Advantage: fast sequential/random access. Problem: external fragmentation (after deleting files, free blocks are scattered, shown as gaps). Linked: each block contains a pointer to the next block — blocks can be scattered, connected by arrows. Advantage: no external fragmentation. Problem: slow random access (must follow chain). FAT: a separate table maps block → next block, simplifying the linked approach. Indexed: each file has an index block containing pointers to all data blocks. Index block shown as a table of block numbers, arrows radiate to data blocks scattered across the disk. Users create/delete files and watch allocation strategies handle the operations. | 2-3 marks — file allocation methods in GATE | Low — allocation methods rarely in interviews |
| 5.3 | **Free Space Management** | - Understand bitmap (bit vector) for free space tracking - Understand linked list of free blocks - Understand grouping and counting methods - Calculate storage overhead for each method | **Free space management visualizer:** Disk block grid. Bitmap: a row of bits (0 = free, 1 = allocated) maps to disk blocks. Allocating a block: the bit flips from 0 to 1 (green to red). Freeing: 1 to 0 (red to green). Finding free blocks: scanner highlights contiguous 0s. Linked list: free blocks form a linked list (arrows connecting free blocks). Allocating from the list: head block is removed and used. Grouping: first free block stores addresses of n free blocks, the last one points to another group. Visual comparison of storage overhead: bitmap (1 bit per block) vs linked list (pointer per free block). | 1-2 marks — free space management in GATE | Low — rarely in interviews |

---

### OS Level 6: I/O & Disk Management

**Theme:** How the OS manages I/O devices and optimizes disk access.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 6.1 | **I/O Systems & DMA** | - Understand programmed I/O, interrupt-driven I/O, and DMA - Understand device drivers and device controllers - Understand buffering: single, double, circular | **I/O modes visualizer:** Three panels showing data transfer from disk to memory. Programmed I/O: CPU actively polls the device (CPU animated as busy, device slowly transfers bytes one at a time, CPU waits for each byte — CPU utilization bar shows 100% busy with I/O). Interrupt-driven: CPU does other work, device interrupts when byte is ready (interrupt signal animation — CPU pauses other work, handles byte, resumes). DMA: DMA controller takes over the transfer (DMA controller animates transferring a block of data from device to memory without CPU involvement, CPU is free — CPU utilization shows mostly free). Buffering: a buffer zone between device and user process shows how single/double/circular buffers decouple producer (device) from consumer (process). | 2-3 marks — DMA and I/O concepts in GATE | Low — I/O rarely in interviews |
| 6.2 | **Disk Scheduling Algorithms** | - Implement FCFS disk scheduling - Implement SSTF (Shortest Seek Time First) - Implement SCAN (elevator algorithm), C-SCAN, LOOK, C-LOOK - Calculate total head movement for each | **Disk scheduling visualizer:** A vertical representation of disk tracks (numbered 0 to N). The read/write head starts at a given position (marked as a horizontal arrow). Pending requests are shown as dots on the track axis. FCFS: head moves to each request in order (animated arrow moves up/down, path drawn as a zigzag line). Total head movement counter updates. SSTF: head moves to the nearest request (shortest distance), then the next nearest — path drawn, potentially showing starvation of distant requests. SCAN: head moves in one direction (e.g., toward track 0), serving requests along the way, reverses at the end, serves the rest — elevator animation with the head sweeping back and forth. C-SCAN: same, but after reaching the end, jumps back to the start without serving. LOOK/C-LOOK: same as SCAN/C-SCAN but reverses at the last request, not the end of disk. Users input request queue, initial head position, and direction. Comparison mode runs all algorithms side by side showing total head movement for each. | 3-4 marks — disk scheduling is a GATE favorite | Low — disk scheduling rarely in interviews |
| 6.3 | **RAID — Redundant Array of Independent Disks** | - Understand RAID levels: 0 (striping), 1 (mirroring), 5 (distributed parity), 6 (double parity), 10 (1+0) - Calculate usable capacity, fault tolerance, read/write performance for each level | **RAID level visualizer:** Multiple disk icons (4-6) arranged horizontally. RAID 0 (striping): data blocks are distributed across disks in round-robin (block A1 on disk 1, A2 on disk 2, A3 on disk 3...) — fast writes/reads (parallel arrows) but zero fault tolerance (one disk fails, all data lost — disk turns red, sad face). RAID 1 (mirroring): each disk has an exact copy on another disk — writes go to both (duplicate arrows), 50% capacity used. One disk fails: data survives on mirror (failed disk red, mirror still green). RAID 5: data blocks + parity blocks distributed across all disks. Parity computation animation (XOR of data blocks). One disk fails: data reconstructed from parity (animated XOR of remaining blocks). RAID 10: striped mirrors — combines speed and redundancy. Users can simulate disk failures and see data recovery. Capacity/performance comparison table. | 2-3 marks — RAID calculations in GATE | Low — RAID rarely in interviews, useful for system design |

---

### OS Level 7: Advanced Topics

**Theme:** Modern OS concepts — distributed systems, virtualization, and containers.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 7.1 | **Segmentation** | - Understand segmentation: code, data, stack, heap segments - Segment table: segment number → (base, limit) - Address translation with segmentation - Segmentation with paging (combined) | **Segmentation address translation visualizer:** A process's logical address space divided into segments of different sizes (code: blue, data: green, stack: red, heap: yellow). Physical memory shows these segments loaded at various base addresses (not necessarily contiguous). Segment table in the center: segment number → (base address, limit). User types a logical address (segment number + offset). The system checks: if offset > limit, SEGMENTATION FAULT (red flash). Otherwise: physical address = base + offset. Combined segmentation + paging: each segment is divided into pages, adding a page table level between segment table and physical memory. | 2-3 marks — segmentation in GATE | Medium — segmentation concepts |
| 7.2 | **Virtualization** | - Understand hypervisor types: Type 1 (bare-metal) and Type 2 (hosted) - Understand virtual machine concept - VMM responsibilities: CPU virtualization, memory virtualization (shadow page tables) - Hardware-assisted virtualization (VT-x) | **Virtualization visualizer:** Layered architecture diagram. Type 1: hardware at bottom, hypervisor directly above, multiple VMs on top (each with its own OS and applications). Type 2: hardware, host OS, hypervisor as an application on the host OS, VMs above. Each VM is a bordered box containing its own mini-OS stack. CPU virtualization: the hypervisor intercepts privileged instructions from guest OS (animated trap from VM to hypervisor). Memory virtualization: guest virtual address → guest physical address → host physical address (two-level translation animation). Users can create/start/stop VMs and see resource allocation change. | 1-2 marks — virtualization concepts occasionally | High — virtualization concepts for cloud/system design interviews |
| 7.3 | **Containers & Modern OS Concepts** | - Understand containers vs VMs (shared kernel, lighter weight) - Understand namespaces (process, network, mount, user) and cgroups - Docker concepts: images, containers, layers - Container orchestration: Kubernetes basics | **Container vs VM comparison visualizer:** Side by side: left shows VMs (each with full OS, heavier), right shows containers (shared host OS kernel, lighter). Resource usage gauges show containers using less memory/CPU overhead. Namespace visualization: a container's isolated view — its own PID 1 (process namespace), its own network stack (network namespace), its own file system root (mount namespace). From the host's perspective, the container's processes are visible with different PIDs. Cgroups: resource limits shown as caps on CPU/memory gauges — when a container tries to exceed its limit, the gauge hits a wall. Docker layer diagram: stacked layers (base OS → dependencies → application code), each layer is cached and reusable. | 0-1 marks — containers not in GATE syllabus | Very high — containers/Docker/Kubernetes are top interview topics |
| 7.4 | **Distributed Operating Systems** | - Understand distributed system challenges: transparency, fault tolerance, synchronization - Clock synchronization: Lamport timestamps, vector clocks - Distributed mutual exclusion: Ricart-Agrawala algorithm - Consensus: basics of Paxos/Raft | **Distributed system visualizer:** Multiple nodes (machines) arranged in a network. Lamport timestamps: each node has a local clock. When a node sends a message, its timestamp is attached. Receiving node updates its clock to max(local, received) + 1. Events are plotted on a space-time diagram (vertical axis = time, horizontal = nodes). Vector clocks: each node maintains a vector of clocks for all nodes, updated on send/receive events. Causal ordering shown by comparing vectors. Distributed mutual exclusion: Ricart-Agrawala — a node wanting to enter CS sends REQUEST to all, waits for REPLY from all, enters CS. Messages animate between nodes. Consensus animation: leader election in Raft with term numbers, heartbeats, and log replication. | 2-3 marks — distributed concepts in GATE | High — distributed systems are a top interview/system design topic |
| 7.5 | **Real-Time & Embedded OS** | - Understand hard real-time vs soft real-time - Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF) - Priority inversion and priority inheritance protocol - RTOS characteristics | **Real-time scheduling visualizer:** Tasks with periods, execution times, and deadlines displayed in a table. RMS: priorities assigned by rate (shorter period = higher priority). A Gantt chart animates task execution with deadline markers. If a deadline is missed, the task's block turns red and flashes. EDF: priorities assigned by nearest deadline — dynamically changing priority shown as tasks reorder in the ready queue. Priority inversion: a low-priority task holds a resource, a high-priority task waits, and a medium-priority task preempts the low-priority one — the high-priority task is blocked longer than expected (inversion highlighted). Priority inheritance: the low-priority task temporarily inherits the high priority (priority number changes with animation), preventing the medium-priority task from preempting. | 1-2 marks — real-time scheduling occasionally | Low — RTOS rarely in interviews |

---

## 7. Detailed Curriculum — Database Management Systems (DBMS)

### DBMS Level 1: Foundations

**Theme:** What is a database, why do we need one, and how do we model data?

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 1.1 | **Introduction to Databases** | - Define database, DBMS, and data independence (physical and logical) - Understand file system vs DBMS tradeoffs - Understand 3-schema architecture (external, conceptual, internal) | **3-schema architecture visualizer:** Three horizontal layers. External (top): multiple user views (different subsets of data for different users — each user sees a simplified view). Conceptual (middle): the complete logical schema of the database. Internal (bottom): the physical storage (files, indexes on disk). Arrows show the mapping between layers. When the internal schema changes (e.g., add an index), the conceptual and external schemas are unaffected (physical data independence — only the bottom layer changes). When the conceptual schema changes (e.g., add a column), external views can remain the same (logical data independence). Users can modify each layer and see which other layers are/aren't affected. | 1-2 marks — database concepts in GATE | Low — foundational |
| 1.2 | **Entity-Relationship (ER) Model** | - Identify entities, attributes (simple, composite, multivalued, derived), and relationships - Understand cardinality: one-to-one, one-to-many, many-to-many - Draw ER diagrams with participation constraints (total, partial) - Understand weak entities and identifying relationships | **ER diagram builder:** A drag-and-drop canvas where users can place entities (rectangles), attributes (ovals), and relationships (diamonds). Connecting them draws lines with cardinality notation (1:1, 1:N, M:N). Attributes attach to entities with lines. Composite attributes branch into sub-attributes. Multivalued attributes have a double oval. Derived attributes have a dashed oval. Weak entities have a double rectangle. Participation constraints: total (double line) vs partial (single line). Users build ER diagrams interactively and can toggle on a "validation" layer that checks for common mistakes (missing primary key, incorrect cardinality). | 2-3 marks — ER diagram questions in GATE | Medium — ER modeling in interviews |
| 1.3 | **Relational Model** | - Understand relations (tables), tuples (rows), attributes (columns) - Understand domain, degree, and cardinality of a relation - Understand keys: super key, candidate key, primary key, foreign key - Understand integrity constraints: entity, referential, domain | **Relational model visualizer:** Tables displayed as interactive grids. Users can create tables, add columns (with data types), and insert rows. Primary key column is highlighted. Foreign key relationships are shown as connecting arrows between tables (clicking a foreign key cell highlights the referenced row in the other table). Integrity constraint checks: attempting to insert a duplicate primary key → red flash + "Entity integrity violated". Inserting a foreign key value that doesn't exist in the referenced table → red flash + "Referential integrity violated". Inserting a value outside the domain → yellow warning. Users can build a small database schema interactively. | 2-3 marks — relational model in GATE | Medium — relational concepts |
| 1.4 | **ER to Relational Mapping** | - Convert entities to tables - Convert relationships to tables (or merge based on cardinality) - Handle multivalued attributes - Handle weak entities - Handle generalization/specialization | **ER-to-relational converter:** The ER diagram (built in lesson 1.2 or a preset) is displayed on the left. On the right, a "Generate Schema" button triggers an animated transformation. Each entity becomes a table (rectangle transforms into a grid). Attributes become columns (ovals morph into column headers). Relationships: 1:N → foreign key added to the N-side table (arrow from diamond to column in the N-side table). M:N → new junction table created (diamond transforms into a new grid). Weak entity: primary key includes owner's primary key. Each mapping rule is explained in a tooltip as the transformation happens. Users can modify the ER diagram and re-generate to see the schema change. | 2-3 marks — ER-to-relational mapping in GATE | Medium — schema design in interviews |
| 1.5 | **Relational Algebra** | - Understand selection (sigma), projection (pi), union, intersection, difference - Understand Cartesian product, natural join, theta join, equijoin - Understand rename and division operations - Write relational algebra expressions for queries | **Relational algebra visualizer:** Input tables displayed as grids. Users type a relational algebra expression (using symbols or text: SELECT, PROJECT, JOIN, etc.). The system evaluates the expression step by step. Each operation transforms the table: selection highlights matching rows (non-matching rows dim), projection removes columns (columns slide out), join merges tables (rows from both tables combine, matching on the join condition — matching pairs glow and merge into a result row). The intermediate and final result tables display below. A "step-by-step" mode shows one operation at a time for complex expressions (e.g., nested operations). Users can build tables and write expressions interactively. | 3-4 marks — relational algebra is a GATE favorite | Medium — conceptual understanding |

---

### DBMS Level 2: SQL

**Theme:** Master the language of databases — from basic queries to complex joins and subqueries.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 2.1 | **SQL Basics — DDL & DML** | - Write CREATE TABLE, ALTER TABLE, DROP TABLE - Write INSERT, UPDATE, DELETE statements - Understand data types and constraints (NOT NULL, UNIQUE, CHECK, DEFAULT) | **SQL executor visualizer:** A SQL editor panel on the left where users type queries. On the right, the database tables are displayed as grids. When a DDL statement executes: CREATE TABLE → a new empty grid appears with column headers. ALTER TABLE ADD → a new column slides in. DROP TABLE → the grid fades out. When a DML statement executes: INSERT → a new row slides into the table from below with values populating cells. UPDATE → the affected cell(s) flash yellow and morph to the new value. DELETE → the row fades out and remaining rows close the gap. Constraint violations: inserting NULL into NOT NULL column → red flash. All operations show "Rows affected: N" feedback. | 2-3 marks — SQL basics in GATE | High — SQL is a must-know for interviews |
| 2.2 | **SQL Queries — SELECT, WHERE, ORDER BY, GROUP BY** | - Write SELECT queries with WHERE filtering - Use ORDER BY for sorting, LIMIT for pagination - Use GROUP BY with aggregate functions (COUNT, SUM, AVG, MIN, MAX) - Use HAVING for group filtering | **SQL query execution visualizer:** Table displayed as a grid. The query executes visually in stages: FROM → the table loads. WHERE → non-matching rows dim/fade (filtering animation). GROUP BY → rows physically rearrange into groups (same group-key values cluster together with group labels). Aggregate functions: COUNT shows a counter per group, SUM shows a running total. HAVING → non-matching groups dim. SELECT → only selected columns remain (others slide out). ORDER BY → rows physically sort with an animation. LIMIT → excess rows slide off the bottom. Each stage is labeled and users can step through stages. The result set builds progressively at the bottom. | 2-3 marks — SQL queries in GATE | Very high — SQL queries are standard interview questions |
| 2.3 | **Joins — INNER, LEFT, RIGHT, FULL, CROSS** | - Understand INNER JOIN: matching rows from both tables - Understand LEFT/RIGHT OUTER JOIN: all rows from one side + matching from the other - Understand FULL OUTER JOIN: all rows from both sides - Understand CROSS JOIN: Cartesian product | **Join visualizer:** Two tables side by side (e.g., Employees and Departments). The join column is highlighted in both tables. INNER JOIN: matching rows from both tables slide toward each other and merge into result rows in the middle. Non-matching rows fade out. LEFT JOIN: all left table rows remain; matching right rows merge in; non-matching left rows get NULL values (empty cells with "NULL" label) for right columns. RIGHT JOIN: mirror of LEFT. FULL OUTER JOIN: all rows from both tables included; NULLs fill where no match. CROSS JOIN: every row from the left table connects to every row from the right (many-to-many arrows, generating a much larger result). A Venn diagram at the top color-codes each join type (INNER = intersection, LEFT = left circle, etc.). | 3-4 marks — joins are heavily tested in GATE | Very high — joins are the most common SQL interview topic |
| 2.4 | **Subqueries & Nested Queries** | - Write correlated and non-correlated subqueries - Use IN, EXISTS, ANY, ALL with subqueries - Understand scalar subqueries, row subqueries, table subqueries - Rewrite subqueries as joins (and vice versa) | **Subquery execution visualizer:** The outer query and inner query are displayed in separate panels with an arrow showing data flow. Non-correlated subquery: the inner query executes first (its result set appears in a bubble), then the outer query uses that result (the bubble plugs into the WHERE clause as a set). Correlated subquery: for each row in the outer query, the inner query re-executes (animation shows the outer query's current row being passed to the inner query, which re-evaluates). EXISTS: the inner query checks for the existence of any row (returns true/false indicator for each outer row). Side-by-side panel shows the equivalent join rewrite. Users can type subqueries and see the execution flow. | 2-3 marks — subqueries in GATE | High — subqueries common in SQL interviews |
| 2.5 | **Views, Indexes & Stored Procedures** | - Understand views as virtual tables - Create and query views - Understand index types: B-tree, hash - Introduction to stored procedures and triggers | **View & index visualizer:** Views: a "virtual table" (dashed border grid) that is defined by a query. When the view is queried, the underlying query executes on the base tables (animated arrows from view to base tables and back). Index: a B-tree structure (linked to DBMS Level 5) sitting beside a table. When a query includes a WHERE clause on the indexed column, the search goes through the B-tree (animated traversal from root to leaf) to find the row pointer, which directly accesses the table row (indexed access, fast path). Without an index: sequential scan (slow path, scanning all rows). Speed comparison bars show the difference. | 1-2 marks — views and indexes in GATE | Medium — indexes important for system design |

---

### DBMS Level 3: Normalization

**Theme:** Design correct schemas by eliminating redundancy and anomalies.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 3.1 | **Functional Dependencies** | - Define functional dependency (X → Y) - Identify trivial and non-trivial FDs - Apply Armstrong's axioms (reflexivity, augmentation, transitivity) - Compute closure of attribute sets and FDs | **FD visualizer:** A relation (table) displayed at the top. FDs are shown as arrows between attribute groups (e.g., {A, B} → {C}). The closure computation is interactive: users select a set of attributes, and the closure algorithm applies FDs one by one — each applicable FD is highlighted, and new attributes are added to the closure set (growing set displayed as a widening highlighted column group). Armstrong's axioms: each axiom is demonstrated with a step-by-step derivation. Users can add/remove FDs and see how closures change. A "candidate key finder" button computes all candidate keys from the given FDs. | 3-4 marks — FDs and closures are heavily tested in GATE | Medium — normalization concepts for interviews |
| 3.2 | **Normal Forms — 1NF, 2NF, 3NF** | - Understand 1NF (atomic values, no repeating groups) - Understand 2NF (no partial dependency on candidate key) - Understand 3NF (no transitive dependency) - Decompose relations to achieve higher normal forms | **Normalization step-through visualizer:** A relation with FDs displayed. 1NF check: the system scans for multi-valued cells (highlighted in red) and decomposes (repeating groups expand into separate rows, non-atomic values split). 2NF check: for each non-prime attribute, the system checks if it's fully functionally dependent on every candidate key. Partial dependencies are highlighted (arrow from a proper subset of a key to an attribute, colored red). Decomposition: the offending attributes are extracted into a new relation with the partial key (animated split — columns move to a new table). 3NF check: transitive dependencies (X → Y → Z where X is key, Y is non-key, Z is non-key) are highlighted. Decomposition removes the transitive dependency. Each step shows before/after schemas. | 4-5 marks — normalization is one of the highest-weighted GATE DBMS topics | High — normalization in database design interviews |
| 3.3 | **BCNF & Decomposition** | - Understand BCNF (every determinant is a superkey) - Identify when 3NF is not BCNF - Perform BCNF decomposition - Understand lossless-join decomposition and dependency preservation | **BCNF decomposition visualizer:** A relation with FDs. For each FD (X → Y), the system checks: "Is X a superkey?" If not, the FD is highlighted in red (BCNF violation). Decomposition: the relation splits into two — one with X and Y (the offending FD), and the remainder. The split animates as the table physically separating into two tables. Lossless-join check: the two decomposed tables are natural-joined (animated join) and the result is compared with the original (matching = lossless, green check; non-matching = lossy, red X). Dependency preservation check: which FDs are preserved in the decomposed schema (checked FDs turn green, lost FDs turn red). Users can try different decomposition orders and see the consequences. | 3-4 marks — BCNF decomposition in GATE | Medium — BCNF concepts for interviews |
| 3.4 | **Multivalued Dependencies & 4NF** | - Understand multivalued dependency (X →→ Y) - Identify when BCNF is not 4NF - 4NF decomposition - Understand join dependencies (5NF concept) | **MVD visualizer:** A relation where a single X value is associated with multiple independent Y and Z values (shown as a table with repeated rows highlighted). The MVD is illustrated by showing how X values combine with all Y and all Z independently. 4NF violation: the table has redundancy because of this independent multivalued relationship. Decomposition: the relation splits into two projections (one for X→→Y, one for X→→Z), each without redundancy. Join: the two decomposed tables are natural-joined to reconstruct the original — the result matches perfectly (lossless). | 1-2 marks — MVDs occasionally in GATE | Low — 4NF rarely in interviews |

---

### DBMS Level 4: Transactions & Concurrency Control

**Theme:** ACID properties, concurrent execution, and how databases maintain consistency.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 4.1 | **Transactions & ACID Properties** | - Define transaction and ACID (Atomicity, Consistency, Isolation, Durability) - Understand transaction states: active, partially committed, committed, failed, aborted - Understand commit and rollback | **Transaction lifecycle visualizer:** A transaction shown as a timeline of operations (read/write). Transaction state diagram (similar to process states): active → partially committed → committed OR active → failed → aborted. ACID demonstration: Atomicity — either all operations complete (commit, green) or none (rollback, all operations undo with reverse animations). Consistency — before and after states of the database both satisfy constraints (constraint check animation). Isolation — two concurrent transactions shown on parallel timelines, each sees a consistent snapshot. Durability — once committed, data persists even after crash (crash animation: screen shakes, data survives). | 2-3 marks — ACID and transactions in GATE | High — ACID properties are a common interview topic |
| 4.2 | **Serializability** | - Understand serial vs non-serial schedules - Conflict serializability: conflict pairs (same data item, at least one write, different transactions) - Build a precedence graph and check for cycles - View serializability (concept) | **Serializability checker visualizer:** Two transactions (T1 and T2) with their operations listed on parallel timelines. A "schedule" is an interleaved ordering of these operations (users can drag to reorder). Conflict pairs are highlighted: two operations from different transactions on the same data item, where at least one is a write (connected by a red dotted line). Precedence graph: nodes for T1 and T2, an edge drawn for each conflict pair (direction based on which comes first in the schedule). If the graph has a cycle → NOT conflict serializable (cycle highlighted in red). If no cycle → conflict serializable (equivalent serial order derived from topological sort of the graph). Users can rearrange schedules and see the serializability change in real-time. | 3-4 marks — serializability is a GATE favorite | Medium — serializability concepts for interviews |
| 4.3 | **Concurrency Control — Locking Protocols** | - Understand shared (read) and exclusive (write) locks - Two-Phase Locking (2PL): growing phase and shrinking phase - Strict 2PL and rigorous 2PL - Understand deadlock in locking | **2PL lock timeline visualizer:** Two transactions on parallel timelines. Each operation (read/write) is preceded by a lock request. Growing phase: locks are acquired (lock icons accumulate). Lock point: the moment the first lock is released. Shrinking phase: locks are released (lock icons disappear). The lock point is marked with a vertical line on the timeline. Strict 2PL: all exclusive locks held until commit (locks only release at the commit point at the end of the timeline). Lock conflict: when T2 requests a lock held by T1, T2 blocks (waiting animation with a lock queue). Deadlock: T1 waits for T2's lock AND T2 waits for T1's lock (circular wait detected, deadlock banner). Wait-for graph shows the cycle. | 3-4 marks — 2PL and locking in GATE | Medium — locking concepts for interviews |
| 4.4 | **Concurrency Control — Timestamp Ordering** | - Understand timestamp-based protocol - Read and write rules based on timestamps - Thomas' Write Rule - Compare timestamp ordering with 2PL | **Timestamp ordering visualizer:** Transactions have timestamps (assigned at start). A data item X has read_TS(X) and write_TS(X). When Ti wants to read X: if TS(Ti) < write_TS(X), Ti is "too late" and must rollback (red flash). When Ti wants to write X: if TS(Ti) < read_TS(X) or TS(Ti) < write_TS(X), Ti must rollback. Thomas' Write Rule: if TS(Ti) < write_TS(X) but read_TS(X) is fine, the write is silently ignored (skip animation). Each operation updates read_TS/write_TS with animated timestamp value changes. A comparison table shows 2PL (may deadlock, not timestamp-ordered) vs timestamp ordering (no deadlock, but may cascade rollback). | 2-3 marks — timestamp ordering in GATE | Low — less common in interviews |
| 4.5 | **Recovery — Logs & Checkpoints** | - Understand write-ahead logging (WAL) - Understand undo and redo recovery - Understand checkpoints and their role in recovery - ARIES algorithm (simplified overview) | **Recovery log visualizer:** A log file shown as a scrolling list of entries: <Ti, X, old_val, new_val>, <Ti, COMMIT>, <CHECKPOINT>. After a "crash" (simulated with a crash button — screen flickers): the recovery algorithm scans the log. Undo: uncommitted transactions' writes are reversed (log entries highlight in red, database values revert with animation). Redo: committed transactions' writes are re-applied if needed (log entries highlight in green, database values update). Checkpoint: the recovery scan starts from the last checkpoint (entries before it are skipped). Users can create transactions, write values, commit/abort, set checkpoints, trigger a crash, and watch recovery proceed. | 2-3 marks — recovery and logging in GATE | Low — recovery rarely in interviews |

---

### DBMS Level 5: Indexing & Storage

**Theme:** How databases physically store and efficiently retrieve data.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 5.1 | **File Organization** | - Understand heap file, sorted file, and hash file organization - Calculate access costs for each organization - Understand blocking factor and file size calculations | **File organization visualizer:** Disk blocks shown as a grid. Heap file: records inserted into any available space (scattered). Searching: full scan (all blocks highlighted sequentially). Sorted file: records sorted by a key (blocks in order). Binary search: half the blocks eliminated each step (binary search animation on blocks). Hash file: hash function maps key to bucket (block number). Direct access to the correct block. Performance comparison: a bar chart shows access time for search, insert, delete operations across all three organizations. Users can insert/search/delete records and see the organization-specific behavior. | 2-3 marks — file organization in GATE | Low — file organization rarely in interviews |
| 5.2 | **B-Tree Indexing** | - Understand B-tree properties: balanced, multi-way, minimum occupancy - Implement insertion with node splitting - Implement deletion with redistribution and merging - Understand B-tree order and height calculations | **B-tree visualizer:** A multi-way tree where each node is a horizontal box containing multiple keys in sorted order (separated by child pointers). Insertion: the new key finds its leaf (animated traversal from root), inserts into the leaf. If the leaf overflows (exceeds order), the middle key pushes up to the parent, and the node physically splits into two (animated split with the middle key rising upward). If the parent overflows, the split propagates upward. Deletion: the key is found and removed. If the node underflows, redistribution from a sibling (key moves sideways) or merging with a sibling (two nodes merge, parent key drops down). Users input keys, and the tree updates. A search animation shows the traversal path from root to the key. Height and occupancy statistics displayed. | 3-4 marks — B-tree operations are heavily tested in GATE | Medium — B-tree knowledge for database internals interviews |
| 5.3 | **B+ Tree Indexing** | - Understand differences between B-tree and B+ tree - B+ tree: all data in leaves, internal nodes are index only - Leaf-level linked list for range queries - Calculate B+ tree height for given parameters | **B+ tree visualizer:** Similar to B-tree but with key differences highlighted: internal nodes contain only keys (guide the search), all actual data/record pointers are in leaf nodes (different visual style — leaf nodes have a record pointer compartment). Leaf nodes are connected by a horizontal linked list (arrows connecting leaves left to right). Search: traversal from root to leaf, then sequential scan along the leaf linked list for range queries (highlight sweeps along the leaf chain). Insertion: similar to B-tree, but splits push copies of keys up (not the actual key). A "Range Query" button lets users specify a range and watch the leaf-level scan highlight matching entries. Comparison mode: B-tree vs B+ tree side by side for the same data, showing why B+ tree is preferred for databases. | 3-4 marks — B+ tree is a GATE favorite | Medium — B+ tree for database internals |
| 5.4 | **Hashing for Indexing** | - Understand static hashing (fixed number of buckets) - Understand overflow handling: chaining and open addressing - Understand dynamic hashing: extendible hashing and linear hashing | **Hashing indexing visualizer:** Static hashing: a fixed array of buckets. Keys are hashed to bucket numbers (hash function animation). Collisions: chaining (overflow buckets linked from primary bucket — chain grows downward). Extendible hashing: a directory (array of pointers) and bucket pages. When a bucket overflows, it splits and the directory doubles if needed. The global depth and local depth labels update. Directory pointers re-route with animation. Linear hashing: buckets split one at a time in linear order; a split pointer advances around the bucket array. When a bucket overflows, the split pointer's bucket splits (not the overflowing one). Users insert keys and watch the hash structure evolve. | 2-3 marks — hashing and extendible hashing in GATE | Low — hash indexing rarely in interviews |

---

### DBMS Level 6: Query Processing & Optimization

**Theme:** How the database engine executes and optimizes queries.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 6.1 | **Query Processing Pipeline** | - Understand the query processing steps: parsing → optimization → execution - Understand query execution plans (logical and physical) - Understand the role of the query optimizer | **Query pipeline visualizer:** A SQL query enters from the left. Step 1 — Parsing: the query is tokenized and parsed into a parse tree (tree diagram builds). Step 2 — Logical plan: the parse tree converts to a relational algebra expression tree (operators as tree nodes). Step 3 — Optimization: the optimizer applies transformation rules (the tree morphs — join reordering, predicate pushdown shown as subtree rearrangements). Step 4 — Physical plan: operators are annotated with implementation choices (hash join vs merge join, index scan vs full scan). Step 5 — Execution: the plan executes bottom-up, data flows through the tree. Each stage is clickable for details. | 2-3 marks — query processing in GATE | Medium — query optimization for database interviews |
| 6.2 | **Join Algorithms** | - Implement nested loop join - Implement block nested loop join - Implement sort-merge join - Implement hash join - Calculate cost (I/O operations) for each | **Join algorithm visualizer:** Two tables displayed as blocks on disk. Nested loop join: for each row of the outer table, scan the entire inner table (animated row-by-row comparison). Very slow for large tables (I/O counter climbs rapidly). Block nested loop: load a block of the outer table, scan the inner table per block (fewer I/O operations). Sort-merge join: both tables sort first (sorting animation), then merge by scanning both simultaneously with two pointers (merge animation). Hash join: build phase — hash the smaller table into a hash table (blocks enter a hash structure); probe phase — scan the larger table and look up each row in the hash table (probe animation). I/O cost comparison displayed as a bar chart. | 2-3 marks — join algorithms in GATE | Medium — understanding query execution for performance |
| 6.3 | **Query Optimization — Heuristic & Cost-Based** | - Understand heuristic optimization rules: push selections down, project early, replace Cartesian products with joins - Understand cost-based optimization: statistics, selectivity, cost estimation - Understand equivalence rules for relational algebra | **Query plan optimizer visualizer:** A relational algebra expression tree for a query. Heuristic rules are shown as transformation buttons: "Push selection down" moves a sigma node lower in the tree (animated node movement). "Push projection down" adds pi nodes closer to leaves. "Replace Cartesian product + selection with join" merges two nodes into a theta-join node. Each transformation shows the estimated cost decreasing (cost counter at the top). Cost-based: statistics (table sizes, distinct values, histograms) are shown, and the optimizer computes selectivity for each predicate and cost for each join order. The optimal plan is highlighted. | 2-3 marks — query optimization in GATE | Medium — query optimization concepts |

---

### DBMS Level 7: Advanced Topics

**Theme:** Beyond relational databases — NoSQL, distributed databases, and the CAP theorem.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 7.1 | **NoSQL Databases** | - Understand when NoSQL is appropriate (schema flexibility, horizontal scaling) - Types: key-value, document, column-family, graph - Compare with relational databases | **NoSQL type comparison visualizer:** Four panels showing the same data modeled in each NoSQL type. Key-value: simple key → value pairs (like a dictionary, Redis-style). Document: JSON documents with nested structure (MongoDB-style). Column-family: column families with rows that can have different columns (Cassandra-style). Graph: nodes and edges representing entities and relationships (Neo4j-style). A query comparison shows how the same question is answered differently in each model. Relational equivalent shown alongside for comparison. Users can input data and see how it maps to each NoSQL model. | 1-2 marks — NoSQL concepts occasionally in GATE | Very high — NoSQL is a top system design interview topic |
| 7.2 | **Distributed Databases** | - Understand horizontal partitioning (sharding) and vertical partitioning - Understand replication: master-slave, master-master - Understand distributed query processing - Two-phase commit protocol | **Distributed DB visualizer:** Multiple database server nodes distributed geographically. Sharding: data is split across nodes (different colored rows go to different servers). A query that spans shards shows the coordinator collecting partial results from each shard and merging them. Replication: master node receives writes, replicates to slave nodes (write propagation arrows). Master-master: both nodes accept writes and sync (bidirectional arrows, conflict detection when concurrent writes to the same row). Two-phase commit: coordinator sends PREPARE to all participants (arrows), waits for VOTE YES/NO from each, then sends COMMIT or ABORT to all (two phases clearly separated). | 1-2 marks — distributed DB occasionally in GATE | Very high — distributed databases are a top system design topic |
| 7.3 | **CAP Theorem & Consistency Models** | - Understand CAP theorem: Consistency, Availability, Partition tolerance (pick 2 of 3) - Understand eventual consistency vs strong consistency - Understand BASE (Basically Available, Soft state, Eventually consistent) vs ACID - Common systems: CA (RDBMS), CP (HBase), AP (Cassandra, DynamoDB) | **CAP theorem visualizer:** A triangle with C, A, P at the vertices. Users click to select 2 properties, and the third dims (cannot have all 3 during a partition). CP selection: the system remains consistent but becomes unavailable during a partition (server returns error for unavailable reads). AP selection: the system remains available but allows inconsistent reads during a partition (two nodes return different values). CA selection: only possible when no partition occurs (single-node scenario). Real-world system logos are placed at the triangle edges: RDBMS (CA), HBase/MongoDB (CP), Cassandra/DynamoDB (AP). An interactive partition simulation: two nodes, user toggles a network partition, and the system behavior changes based on the CAP choice. | 1-2 marks — CAP theorem occasionally | Very high — CAP theorem is a fundamental system design interview topic |

---

## 8. Detailed Curriculum — Object-Oriented Programming (OOP)

### OOP Level 1: Foundations

**Theme:** From procedural thinking to object-oriented thinking.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 1.1 | **Procedural vs Object-Oriented Programming** | - Understand procedural programming: functions operating on data - Understand OOP: data and behavior bundled into objects - Identify the four pillars of OOP: encapsulation, inheritance, polymorphism, abstraction | **Paradigm comparison visualizer:** Left panel (procedural): a set of functions (boxes) and separate data structures (boxes). Arrows show functions accessing and modifying data — spaghetti of connections. Right panel (OOP): objects (rounded containers) each containing both data (attributes) and functions (methods). Arrows between objects are clean and structured (method calls). The four pillars shown as building blocks: the user clicks each pillar to see a brief animated example (encapsulation: data hiding behind a method interface, inheritance: child object borrowing from parent, polymorphism: same method name doing different things, abstraction: simplified interface hiding complexity). | 1 mark — OOP basics in GATE | Medium — foundational |
| 1.2 | **Classes & Objects** | - Define class as a blueprint and object as an instance - Understand attributes (data members) and methods (member functions) - Understand constructors and destructors - Understand `this` / `self` reference | **Class-to-object visualizer:** A class definition shown as a template (blueprint with dashed borders): attribute names and method signatures. When "instantiate" is clicked, an object appears below the class — a solid-bordered card with attribute values filled in and methods ready to call. Multiple objects can be created from the same class (each with different attribute values). Clicking a method on an object shows the `this`/`self` reference (arrow from the method back to the object's own attributes). Constructor: when an object is created, the constructor method highlights and initializes attributes. Destructor: when an object is deleted, the destructor highlights and the object fades out. Memory panel shows the object on the heap with a reference variable on the stack pointing to it. | 1-2 marks — class/object concepts in GATE | Medium — foundational |
| 1.3 | **Encapsulation & Access Modifiers** | - Understand data hiding: private vs public vs protected - Implement getters and setters - Understand information hiding and its benefits - Understand friend functions/classes concept | **Encapsulation visualizer:** An object shown as a layered structure. The outer layer (public) is visible and accessible to all (green border). The inner layer (private) is hidden (red border with a lock icon). Protected is a middle layer (yellow, accessible to family/subclasses only). External code trying to access private members: an arrow from outside bounces off the red border with a "Access Denied" flash. Accessing through a public getter: the arrow goes to the getter method (green layer), which reaches into the private layer and returns the value. A "without encapsulation" toggle shows all attributes as public — external code can directly modify values (potentially corrupting state, shown as a warning). | 1-2 marks — encapsulation in GATE | Medium — encapsulation concepts |
| 1.4 | **Static Members & Class Methods** | - Understand static attributes (shared across all instances) - Understand static methods (callable without an object) - Understand class-level vs instance-level members - Use cases: counters, utility functions, singleton patterns | **Static vs instance visualizer:** A class with both instance attributes and a static attribute. Multiple objects created from the class, each with their own instance attributes (separate cards). The static attribute is shown as a shared resource above all objects, connected to each by a dashed line. When any object modifies the static attribute, it changes for all objects (value updates cascade across all object cards). Instance attribute changes only affect the individual object. A counter example: static count increments with each new object creation (animated count-up visible in the shared static box). Static method shown as callable directly from the class (no object needed — arrow from "Class" directly to the method). | 1 mark — static members | Low — occasionally in interviews |
| 1.5 | **Object Relationships — Association, Aggregation, Composition** | - Understand association (uses-a) - Understand aggregation (has-a, weak ownership) - Understand composition (has-a, strong ownership) - UML notation for each relationship type | **Object relationship visualizer:** UML-style diagram builder. Association: two classes connected by a line (Car "uses" Road). Aggregation: a diamond-ended line from whole to part (Team ◇— Player; players can exist without the team). Composition: a filled diamond-ended line (House ◆— Room; rooms cannot exist without the house). Interactive demonstration: in aggregation, deleting the whole (Team) leaves the parts (Players) alive (they persist on the canvas). In composition, deleting the whole (House) also deletes the parts (Rooms fade out with the House). Users can create classes and define relationships between them, choosing the relationship type from a dropdown. | 1 mark — object relationships | Medium — OOP design concepts |

---

### OOP Level 2: Inheritance & Polymorphism

**Theme:** Code reuse through inheritance and flexibility through polymorphism.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 2.1 | **Single Inheritance** | - Understand parent (base) and child (derived) classes - Understand member access in inheritance (what is inherited, what is not) - Understand constructor chaining (child calls parent constructor) - Method overriding (redefining a parent method in the child) | **Inheritance tree visualizer:** Parent class (top) connected by an arrow to child class (bottom). Both shown as class cards with attributes and methods. Inherited members in the child are shown with a "inherited" tag and a lighter shade. Overridden methods show both the parent version (struck through) and the child version (active). Constructor chaining: when the child object is created, the parent constructor fires first (parent card flashes), then the child constructor (child card flashes). A method call on the child object: if overridden, the child's version runs (child method highlights). If not overridden, the parent's version runs (parent method highlights, inherited copy in child glows). | 2-3 marks — inheritance in GATE | High — inheritance is a core interview topic |
| 2.2 | **Multiple Inheritance & Diamond Problem** | - Understand multiple inheritance (class inherits from two or more parents) - Understand the diamond problem - Understand how different languages handle it (virtual inheritance, interfaces) - MRO (Method Resolution Order) in languages with multiple inheritance | **Diamond problem visualizer:** Four classes arranged in a diamond: A at top, B and C in the middle (both inherit from A), D at the bottom (inherits from both B and C). When D calls a method defined in A, the ambiguity is shown: two paths (A → B → D and A → C → D) light up simultaneously with a "Which one?" question mark. Solution 1 — Virtual inheritance: A is inherited only once (the two paths merge at A, shown as a single copy). Solution 2 — Interfaces: B and C are interfaces, no ambiguity since they have no implementation. MRO: the resolution order is computed and displayed as a linear sequence (e.g., D → B → C → A), with each class checked in order for the method. | 2-3 marks — diamond problem in GATE | High — diamond problem is a classic interview question |
| 2.3 | **Method Overloading (Compile-Time Polymorphism)** | - Understand method overloading: same name, different parameter lists - Understand operator overloading concepts - Understand how the compiler resolves overloaded calls (signature matching) | **Overloading resolution visualizer:** A class with multiple methods sharing the same name but different parameter lists (shown as separate method cards, each with a distinct signature). A method call appears at the top with specific arguments. The system compares the call's arguments against each overloaded signature — matching parameter types light up green, non-matching stay red. The best match is selected and highlighted. Operator overloading: a custom class (e.g., Vector) with + operator defined. When two Vector objects are added (v1 + v2), the custom + method is invoked (method card highlights), and the result is computed using the custom logic (shown as vector addition animation). | 1-2 marks — overloading in GATE | Medium — overloading concepts |
| 2.4 | **Method Overriding (Runtime Polymorphism)** | - Understand method overriding: same signature in parent and child - Understand virtual functions and dynamic dispatch - Understand vtable (virtual table) concept - Difference between overloading and overriding | **Runtime dispatch visualizer:** A parent class (Animal) with a virtual method (speak()). Two child classes (Dog, Cat) override speak(). A reference variable of type Animal points to a Dog object (reference arrow shown). When speak() is called on the reference: compile time shows "Animal::speak" (compiler's view). But at runtime, the vtable is consulted — the vtable for Dog is shown as a lookup table mapping speak → Dog::speak. The actual Dog::speak method executes (runtime highlights Dog's version). Changing the reference to point to a Cat object: the vtable changes, and Cat::speak executes. Side-by-side: compile-time vs runtime resolution, showing why this is "runtime polymorphism". | 2-3 marks — virtual functions and vtable in GATE | Very high — polymorphism is one of the most-asked OOP interview topics |
| 2.5 | **Abstract Classes & Interfaces** | - Understand abstract classes: cannot be instantiated, may have abstract methods - Understand interfaces: purely abstract, no implementation (in classical definition) - Understand when to use abstract class vs interface - Implement dependency injection with interfaces | **Abstract class/interface visualizer:** An abstract class shown as a class card with dashed borders (indicating it cannot be instantiated). Abstract methods have no body (empty box). Concrete child classes implement the abstract methods (solid method boxes). Attempting to instantiate the abstract class: a "Cannot Instantiate" error flash. Interface: a fully dashed card with only method signatures (no attributes, no implementation). A class "implements" the interface (dashed arrow with "implements" label). Dependency injection: a high-level module depends on an interface (not a concrete class). The concrete implementation is "injected" — users can swap implementations by dragging different concrete classes into the dependency slot, and the behavior changes. | 2-3 marks — abstract classes in GATE | High — abstraction concepts are important for OOP interviews |

---

### OOP Level 3: Advanced OOP Concepts

**Theme:** Generics, type systems, and memory management in OOP.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 3.1 | **Generics / Templates** | - Understand generic programming: writing code that works with any type - Understand type parameters and type constraints - Generic classes and generic methods - Type erasure vs reification | **Generics visualizer:** A generic class (Box<T>) shown as a class card with a type parameter T (shown as a placeholder slot). Instantiation: Box<Integer> — the T slot fills in with "Integer" and all T references in the class morph to "Integer". Box<String> — the T slot fills with "String". Both instances shown side by side, demonstrating code reuse without duplication. Type constraint: Box<T extends Comparable> — only types that implement Comparable can fill the T slot. Attempting to use a non-Comparable type: the slot rejects the type (red flash). A "without generics" panel shows the same code using Object type (losing type safety, requiring casts — cast errors shown as runtime red flashes). | 1-2 marks — generics occasionally | Medium — generics in coding interviews |
| 3.2 | **Exception Handling** | - Understand try-catch-finally structure - Understand checked vs unchecked exceptions - Custom exception classes - Exception hierarchy and exception chaining | **Exception flow visualizer:** A call stack shown as a vertical stack of method frames. Normal execution: each method calls the next, stack grows. When an exception is thrown: a red bolt appears at the throwing method. The stack unwinds — each frame checks for a matching catch block (frame-by-frame highlight). If a catch matches: the exception is caught (green handler box activates), execution resumes. If no catch: the frame pops (fades out), and the exception propagates to the caller. Finally block: always executes regardless of exception (yellow highlight). Custom exception: a class extending Exception with custom attributes. Exception hierarchy tree showing the relationship between Exception types. | 1-2 marks — exception handling | Medium — exception handling in coding |
| 3.3 | **Memory Model — Stack vs Heap** | - Understand stack memory: local variables, function calls, LIFO - Understand heap memory: dynamically allocated objects - Understand references/pointers pointing from stack to heap - Understand memory leaks and their causes | **Stack/heap memory visualizer:** A split-screen: left half is the stack (vertical, growing upward), right half is the heap (free-form space). When a method is called: a stack frame pushes onto the stack (frame with local variables). When an object is created: a block appears on the heap, and a reference in the stack frame points to it (arrow from stack to heap). When the method returns: the stack frame pops (fades out). If the heap object has no more references pointing to it: it's "garbage" (dims, question mark). With GC: garbage is collected (fades out, memory freed). Without GC (manual management): users must manually "free" the object. Memory leak: an object on the heap that still has a reference but is never used — the heap fills up over time (heap capacity meter rises). | 2-3 marks — memory model in GATE | High — memory concepts are common in interviews |
| 3.4 | **Garbage Collection** | - Understand reference counting - Understand mark-and-sweep algorithm - Understand generational garbage collection - GC pauses and their impact on performance | **Garbage collection visualizer:** Heap memory shown as a field of object nodes connected by reference arrows. Reference counting: each object has a counter. When a reference is created, the counter increments (+1 animation). When a reference is removed, it decrements (-1). When counter hits 0, the object is collected (fades out). Circular reference problem: two objects referencing each other (both have count 1 even though no external reference — they survive incorrectly, highlighted in yellow). Mark-and-sweep: Phase 1 (mark) — starting from GC roots (stack variables), reachable objects are marked (turn green via DFS/BFS traversal). Phase 2 (sweep) — unmarked objects are collected (turn red and fade out). Generational GC: objects divided into young/old generations, young generation collected more frequently (more animation in young space). | 1-2 marks — GC concepts | Medium — GC knowledge for system performance interviews |
| 3.5 | **Reflection & Metaprogramming** | - Understand reflection: inspecting/modifying program structure at runtime - Runtime type identification - Dynamic method invocation - Annotations/decorators concept | **Reflection visualizer:** An object shown as a class card. Reflection API: a "mirror" panel that reveals the object's internal structure at runtime — lists all methods (including private), all attributes, all interfaces implemented. Dynamic method invocation: the reflection API calls a method by name (string → method reference → invoke). The called method highlights even though it was discovered at runtime, not compile time. Annotation/decorator: a label attached to a method that modifies its behavior. The decorator wraps the method (wrapper layer added visually around the method card), adding pre/post processing (logging, timing, authentication check before the method body executes). | 0-1 marks — reflection rarely in GATE | Medium — metaprogramming for framework understanding |

---

### OOP Level 4: Design Patterns

**Theme:** Proven solutions to common software design problems.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 4.1 | **Creational Patterns — Singleton & Factory** | - Implement Singleton pattern (one instance, global access point) - Implement Factory Method pattern (defer instantiation to subclasses) - Implement Abstract Factory pattern (family of related objects) - Understand when to use each pattern | **Singleton visualizer:** A class with a private constructor (lock icon). A static getInstance() method is the only entry point. First call: object is created (new card appears). Second call: the same object is returned (arrow points to existing card, "Already exists" label). Third call: same object again. A counter shows "Instances: 1" throughout. Thread-safety: two concurrent calls (parallel arrows) — without protection, two objects might be created (bug!); with double-checked locking, only one is created. Factory Method: a Creator class with a factoryMethod(). Subclasses override factoryMethod() to create different product types. Calling the factory: the appropriate subclass's method runs, and the correct product type is instantiated (product card appears with the specific type label). Users select which concrete creator to use and see different products emerge. | 0-1 marks — design patterns rarely in GATE | Very high — Singleton and Factory are the most-asked design pattern interview topics |
| 4.2 | **Structural Patterns — Adapter & Decorator** | - Implement Adapter pattern (convert one interface to another) - Implement Decorator pattern (add behavior dynamically) - Implement Facade pattern (simplified interface to a complex subsystem) - Understand when to use each pattern | **Adapter visualizer:** Two incompatible interfaces shown as puzzle pieces that don't fit (different shapes). The adapter is a wrapper that transforms one interface to match the other (adapter piece bridges the gap, shapes connect). A client calls the adapter's method, which internally calls the adaptee's method (arrow redirection). Decorator visualizer: a core component (e.g., Coffee). Decorators wrap it: MilkDecorator(SugarDecorator(Coffee)). Each decorator adds a layer (concentric rings around the core). Method call: the outermost decorator's method calls the inner's method, which calls the core's — result builds up through the layers. Users can add/remove decorators and see the composition change. Cost/description updates with each decorator layer. | 0-1 marks — design patterns rarely in GATE | High — decorator and adapter patterns in interviews |
| 4.3 | **Behavioral Patterns — Observer & Strategy** | - Implement Observer pattern (pub/sub notification system) - Implement Strategy pattern (interchangeable algorithms) - Implement Command pattern (encapsulate actions) - Understand when to use each pattern | **Observer pattern visualizer:** A subject (publisher) at the center with multiple observer (subscriber) nodes around it. When the subject's state changes (user modifies a value), all observers are notified (animated notification arrows radiate from subject to each observer). Each observer updates its display (observer cards show the new state). Users can add/remove observers and modify the subject's state. Unsubscribed observers don't receive notifications (arrow skips them). Strategy pattern: a context object with a "strategy" slot. Multiple strategy implementations are shown as interchangeable cards. Users drag a strategy card into the slot, and the context's behavior changes (e.g., different sorting algorithms: the sort() method uses whichever strategy is plugged in). Swapping strategies at runtime: the card swaps and behavior changes instantly. | 0-1 marks — design patterns rarely in GATE | Very high — Observer and Strategy are frequently asked in interviews |
| 4.4 | **MVC & Architectural Patterns** | - Understand Model-View-Controller pattern - Understand MVVM and MVP variants - Understand Repository pattern - Understand dependency injection container | **MVC visualizer:** Three connected components: Model (data, shown as a database/object), View (UI, shown as a screen/interface), Controller (logic, shown as a gear). User interacts with View (click event) → Controller receives the event and updates Model → Model notifies View → View re-renders. Data flow arrows animate through the cycle. MVVM variant: ViewModel replaces Controller, with two-way data binding (bidirectional arrows between View and ViewModel). MVP variant: Presenter replaces Controller, View is passive (Presenter directly updates View). Users can trigger events and watch the data flow through each architectural pattern. Side-by-side comparison of MVC vs MVVM vs MVP. | 0-1 marks — architectural patterns | High — MVC knowledge expected for web development interviews |

---

### OOP Level 5: SOLID Principles

**Theme:** Five principles for writing maintainable, extensible object-oriented code.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 5.1 | **Single Responsibility Principle (SRP)** | - Understand: a class should have only one reason to change - Identify SRP violations in code - Refactor monolithic classes into focused classes - Benefits: testability, maintainability, readability | **SRP violation/fix visualizer:** Before: a single massive class card (UserManager) with too many responsibilities (authentication, database queries, email sending, logging — each group of methods is colored differently). The class has multiple "reasons to change" (labeled arrows from outside: "email provider change", "database change", "auth policy change"). After: the class is split into focused classes (Authenticator, UserRepository, EmailService, Logger), each with a single color and a single "reason to change". The refactoring animation shows methods physically separating from the monolith into their new homes. A complexity meter drops from red to green. | 0-1 marks — SOLID rarely in GATE | Very high — SOLID principles are a top OOP interview topic |
| 5.2 | **Open-Closed Principle (OCP)** | - Understand: open for extension, closed for modification - Use abstraction to enable extension without modifying existing code - Identify OCP violations - Apply OCP through interfaces and inheritance | **OCP violation/fix visualizer:** Before: a PaymentProcessor class with a processPayment() method containing a giant if-else chain (if CreditCard... else if PayPal... else if Crypto...). Adding a new payment type requires modifying the existing class (red highlight on the modification). After: a PaymentStrategy interface with processPayment(). Concrete implementations (CreditCardPayment, PayPalPayment, CryptoPayment) each implement the interface. Adding a new payment type: a new class is created (extension, green highlight) without touching existing code (existing classes remain unchanged, green locks). The if-else chain disappears. | 0-1 marks — SOLID rarely in GATE | Very high — OCP is frequently discussed in design interviews |
| 5.3 | **Liskov Substitution Principle (LSP)** | - Understand: subtypes must be substitutable for their base types - Identify LSP violations (e.g., Square extends Rectangle problem) - Understand behavioral subtyping - Design inheritance hierarchies that respect LSP | **LSP violation visualizer:** Rectangle class with setWidth() and setHeight(). Square extends Rectangle. A function that takes a Rectangle parameter, sets width to 5 and height to 4, and asserts area = 20. With a Rectangle object: works correctly (green check). With a Square object: setting width also changes height (or vice versa) — area assertion fails (red X). The Square is NOT a valid substitute for Rectangle (LSP violated). Fix: separate Square and Rectangle, or use a common Shape interface with an area() method without mutable width/height. Before and after class diagrams shown side by side. The substitution test animates: base type object runs through the function (pass), derived type object runs through (fail/pass depending on violation/fix). | 0-1 marks — SOLID rarely in GATE | High — LSP is a classic OOP interview discussion |
| 5.4 | **Interface Segregation Principle (ISP)** | - Understand: clients should not be forced to depend on methods they don't use - Identify fat interfaces - Split fat interfaces into focused ones - Benefits: decoupling, easier testing | **ISP violation/fix visualizer:** Before: a fat interface (Worker) with methods: work(), eat(), sleep(), manageTeam(). A RobotWorker class implements Worker but has to provide dummy implementations for eat() and sleep() (methods shown as empty/throwing boxes with red warning). After: the fat interface splits into Workable (work()), Eatable (eat()), Sleepable (sleep()), Manageable (manageTeam()). HumanWorker implements Workable + Eatable + Sleepable. RobotWorker implements only Workable (no forced empty methods). The visual shows the "unnecessary dependency" arrows disappearing after the refactoring. | 0-1 marks — SOLID rarely in GATE | High — ISP discussed in design interviews |
| 5.5 | **Dependency Inversion Principle (DIP)** | - Understand: high-level modules should not depend on low-level modules; both should depend on abstractions - Understand: abstractions should not depend on details; details should depend on abstractions - Implement DIP through dependency injection | **DIP violation/fix visualizer:** Before: a high-level NotificationService class directly instantiates and depends on a low-level EmailSender class (solid arrow pointing downward: high-level → low-level). If EmailSender changes, NotificationService must change (tight coupling). After: both depend on an abstraction (MessageSender interface). NotificationService depends on the interface (arrow to abstraction), and EmailSender implements the interface (arrow upward to abstraction). Dependency arrows are inverted (high-level and low-level both point toward the abstraction in the middle). Swapping implementations: the EmailSender is swapped with an SMSSender (both implement MessageSender) without changing NotificationService. | 0-1 marks — SOLID rarely in GATE | High — DIP is fundamental to clean architecture discussions |

---

### OOP Level 6: Advanced Topics

**Theme:** Beyond the basics — performance, testing, and real-world OOP applications.

| # | Lesson Title | Learning Objectives | Visualization Spec | GATE Relevance | Placement Relevance |
|---|---|---|---|---|---|
| 6.1 | **Object Serialization & Deserialization** | - Understand serialization: converting objects to byte stream - Understand deserialization: reconstructing objects from byte stream - JSON and binary serialization formats - Versioning and backward compatibility challenges | **Serialization visualizer:** An object (class card with populated attributes) on the left. "Serialize" button: the object's data converts into a JSON representation (or binary stream) with an animated transformation — attributes map to key-value pairs, nested objects map to nested JSON. The serialized form travels across a "network" (animated journey) to the right side. "Deserialize" button: the JSON reconstructs into an object on the right (reverse transformation animation). Versioning challenge: the sender serializes with v1 schema, the receiver expects v2 (extra field). The extra field shows a default value (yellow highlight) or the missing field causes an error (red highlight). | 0-1 marks — serialization rarely in GATE | Medium — serialization concepts for distributed systems |
| 6.2 | **Concurrency in OOP** | - Understand thread-safe objects - Synchronized methods and blocks - Immutable objects for thread safety - Concurrent collections concept | **Thread-safety visualizer:** A shared object (BankAccount with balance). Two threads access it concurrently. Without synchronization: both read balance 100, both write 100 - 50 = 50, final balance = 50 instead of 0 (race condition — interleaving shown on a timeline, wrong final value in red). With synchronized method: one thread acquires the lock (lock icon), the other waits (blocked state). The first completes, releases the lock, the second proceeds. Final balance = 0 (correct, green). Immutable object: an object where no method modifies state — all methods return new objects. Thread-safety guaranteed because the object never changes (no arrows modifying internal state). | 1-2 marks — concurrency concepts | High — thread safety is a common interview topic |
| 6.3 | **Testing OOP Code** | - Understand unit testing concepts - Test doubles: mock, stub, fake, spy - Arrange-Act-Assert pattern - Test coverage and its limits | **Testing visualizer:** A class under test with dependencies. Unit test: the test isolates the class by replacing dependencies with mocks (dependency cards swap out for "mock" cards with preset behaviors). Arrange: setup code configures mock behaviors (mock card shows programmed responses). Act: the method under test is called (method highlights). Assert: the result is compared with the expected value (green check or red X). Mock verification: did the mock's method get called the expected number of times? (call counter on mock). Code coverage: a pseudocode panel where executed lines are highlighted green, unexecuted lines are highlighted red. Coverage percentage shown as a gauge. | 0 marks — testing not in GATE | High — testing knowledge expected in interviews |
| 6.4 | **Real-World OOP — Applying Everything** | - Design a simple system using OOP principles (e.g., Library Management System) - Apply SOLID principles, design patterns, and inheritance hierarchies - Identify trade-offs in design decisions | **System design builder:** A blank canvas where users design a system (e.g., Library Management System). Drag-and-drop class creation: define classes (Book, Member, Librarian, Loan, Reservation). Define relationships: Member borrows Book (association), Library contains Books (composition). Apply patterns: Observer for notifications (book available alert), Strategy for different fine calculation methods, Singleton for the library catalog. SOLID check: a "validate" button scans the design for SRP violations (class with too many methods), OCP violations (hardcoded if-else), etc. Each violation highlights the offending class with a suggestion tooltip. UML class diagram auto-generates as the user builds. | 0 marks — system design not in GATE as OOP | Very high — OOP design is the most common system design interview topic |

---

## 9. Visualization Philosophy & Technical Specification

### 9.1 Core Philosophy

Every lesson in the Engineering Track ships with a bespoke interactive visualization. This is not a nice-to-have — it is the platform's primary differentiator. The visualizations transform abstract CS concepts into tangible, interactive experiences.

**Principles:**
1. **See, don't just read.** Every algorithm, data structure, and protocol must be *visible* in action.
2. **Control the pace.** Every visualization has a speed slider (0.25x to 4x) and a step-through mode.
3. **Bring your own input.** Users can input custom data (arrays, graphs, IP addresses, process tables) into every visualization.
4. **Pseudocode sync.** Every algorithm visualization has a pseudocode panel with line-by-line highlighting synchronized to the animation.
5. **Compare, don't memorize.** Comparison modes (e.g., BFS vs DFS, FIFO vs LRU, TCP vs UDP) let users see differences side-by-side.
6. **Fail safely.** Users can create invalid inputs (cycles in DAGs, unsatisfiable constraints) and see meaningful error states.

### 9.2 Visualization Component Architecture

All visualizations are React client components built with:

| Layer | Technology | Purpose |
|---|---|---|
| **Canvas rendering** | SVG (via React) for structured diagrams; HTML Canvas for high-element-count scenes (>100 nodes) | Rendering the visual elements |
| **Animation engine** | CSS transitions + `requestAnimationFrame` for smooth step-through | Driving animations |
| **State management** | `useReducer` for visualization state machines | Managing algorithm state |
| **Layout algorithms** | Custom tree layout (Reingold-Tilford), force-directed graph layout (d3-force), layered graph (Sugiyama) | Positioning nodes/edges |
| **User input** | Controlled inputs + drag-and-drop (native HTML5 DnD) | Accepting custom data |
| **Pseudocode panel** | Syntax-highlighted pseudocode with line markers | Showing algorithm steps |

### 9.3 Shared Visualization Components

The following reusable components serve multiple subjects:

| Component | Used by | Description |
|---|---|---|
| `ArrayVisualizer` | DSA (sorting, searching, DP) | Horizontal bar chart with comparison/swap animations |
| `TreeVisualizer` | DSA (BST, AVL, B-tree, heaps, tries), DBMS (B+ tree) | Hierarchical tree layout with node operations |
| `GraphVisualizer` | DSA (BFS, DFS, Dijkstra, MST), CN (routing, network topology), OS (RAG) | Interactive graph builder with traversal animations |
| `TableVisualizer` | DBMS (SQL, relational algebra), OS (page tables, scheduling), DSA (DP tables) | Animated grid/matrix with cell-level operations |
| `SequenceDiagram` | CN (TCP handshake, HTTP), OS (IPC) | Two-party timeline with message arrows |
| `GanttChart` | OS (scheduling algorithms) | Horizontal timeline with colored process blocks |
| `PseudocodePanel` | All subjects | Syntax-highlighted pseudocode with line-by-line stepping |
| `SpeedController` | All subjects | Play/pause, step, speed slider (0.25x–4x) |
| `MemoryVisualizer` | OOP (stack/heap), OS (paging, virtual memory) | Split stack/heap view with references |
| `UMLDiagram` | OOP (class diagrams, relationships), DBMS (ER diagrams) | Drag-and-drop UML builder |

### 9.4 Visualization Specs Summary by Subject

| Subject | Visualization Count | Key Visualization Types |
|---|---|---|
| DSA | 42 lessons | Sorting bars, linked list node chains, tree diagrams, graph traversals, DP tables, pseudocode panels |
| CN | 34 lessons | Packet journey animations, layer cakes, sequence diagrams, network topologies, subnetting calculators |
| OS | 35 lessons | Gantt charts, state diagrams, page frame tables, memory partitions, disk arm movement |
| DBMS | 35 lessons | ER diagram builder, SQL execution visualizer, B-tree operations, transaction timelines, normalization step-through |
| OOP | 30 lessons | Class diagrams, inheritance trees, memory models, design pattern interactions, SOLID refactoring animations |

### 9.5 Visualization Interaction Model

Every visualization follows a consistent interaction pattern:

**Controls (always present):**
```
┌──────────────────────────────────────────────────┐
│  [▶ Play]  [⏸ Pause]  [⏭ Step]  [⟲ Reset]       │
│  Speed: [──●──────] 0.25x  0.5x  1x  2x  4x     │
│  Input: [________________________] [Apply]         │
│  Presets: [Best Case] [Worst Case] [Random]        │
└──────────────────────────────────────────────────┘
```

**Pseudocode Panel (always present for algorithm visualizations):**
```
┌──────────────────────────────┐
│  function binarySearch(arr,  │
│      target):                │
│  ► lo = 0                    │  ← highlighted line
│    hi = arr.length - 1       │
│    while lo <= hi:           │
│      mid = (lo + hi) / 2     │
│      if arr[mid] == target:  │
│        return mid            │
│      else if arr[mid] < t:   │
│        lo = mid + 1          │
│      else:                   │
│        hi = mid - 1          │
│    return -1                 │
│                              │
│  Variables:                  │
│  lo = 0, hi = 7, mid = 3    │
│  target = 5                  │
└──────────────────────────────┘
```

**State Display:**
- Current operation counter (e.g., "Comparisons: 12, Swaps: 5")
- Current time complexity progression (e.g., "Operations: 45 out of ~n^2 = 64")
- Algorithm status (e.g., "Phase: Partition | Pivot: 7 | Left: [1,3,4] Right: [9,8]")

**User Input Capabilities by Subject:**

| Subject | Input Type | Examples |
|---|---|---|
| DSA | Custom arrays, graph edge lists, tree node sequences, DP parameters | Array: "5,3,8,1,9,2" / Graph: "A-B:5, B-C:3, A-C:7" |
| CN | IP addresses, subnet masks, packet payloads, protocol parameters | IP: "192.168.1.0/24" / Packet: custom headers |
| OS | Process tables (arrival time, burst time), reference strings, resource matrices | Processes: "P1: AT=0, BT=5; P2: AT=1, BT=3" |
| DBMS | Table data, SQL queries, FD sets, B-tree keys | Table: inline editor / FDs: "A→B, BC→D" |
| OOP | Class definitions, object hierarchies | Drag-and-drop class builder |

### 9.6 Accessibility Requirements for Visualizations

All visualizations must meet:
- **Keyboard navigation:** every interactive element reachable via Tab, operations triggerable via Enter/Space
- **Color contrast:** minimum 4.5:1 contrast ratio, no color-only information encoding (patterns/textures used alongside color)
- **Screen reader support:** aria-live regions announce visualization state changes, aria-labels on all interactive elements
- **Reduced motion:** `prefers-reduced-motion` media query disables animations, showing static state transitions instead
- **Text scaling:** visualizations scale correctly up to 200% browser zoom

### 9.7 Performance Requirements for Visualizations

| Metric | Target |
|---|---|
| First paint of visualization | < 200ms from tab activation |
| Animation frame rate | 60fps for CSS transitions, 30fps minimum for canvas-heavy scenes |
| Input-to-visual response | < 100ms for user interactions (click, drag, input) |
| Maximum elements rendered | 500 nodes/edges (SVG), 5,000 nodes (Canvas fallback) |
| Memory usage per visualization | < 50MB even with maximum input sizes |
| Bundle size per visualization component | < 50KB gzipped (lazy-loaded per lesson) |

---

## 10. Learning Modes

### 10.1 Learn Mode

**Purpose:** Primary content consumption — interactive lessons with visualizations.

**Lesson Structure:**
Each lesson follows a consistent 5-tab structure, using the LessonShell component pattern from the School Track:

**Tab 1: Concept**
- Text-based explanation of the topic with inline diagrams and illustrations
- Written in a clear, conversational tone — not textbook-dry, not overly casual
- Uses analogies and real-world examples to build intuition (e.g., "A stack is like a stack of plates — you can only add/remove from the top")
- Includes "Key Insight" callout boxes for important takeaways
- Includes "Common Mistake" warning boxes for frequent misconceptions
- Estimated reading time: 5-8 minutes
- No video dependency — the text and diagrams carry the entire explanation

**Tab 2: Visualization**
- The bespoke interactive visualization for the lesson (detailed specs in Section 4-8)
- Full interactivity: user input, speed control, step-through, auto-play
- Pseudocode panel synced to the visualization state
- "Reset" button to restart with different inputs
- Preset examples (e.g., "best case", "worst case", "random") for quick exploration
- Estimated interaction time: 10-15 minutes

**Tab 3: Walkthrough**
- Step-by-step pseudocode walkthrough of the algorithm/concept
- Each step is explained in plain language alongside the pseudocode
- Line-by-line execution trace with variable state tables
- Complexity analysis at the end: time and space with derivation
- "Try it yourself" mini-exercise: trace the algorithm on a given input
- Estimated time: 5-10 minutes

**Tab 4: Quiz**
- 3-5 questions testing the lesson's learning objectives
- Question types: single-correct MCQ, trace/output questions, complexity analysis questions
- Immediate feedback with explanations for wrong answers
- Visualization replay for trace questions (shows the algorithm running on the given input)
- XP awarded per correct answer
- Estimated time: 3-5 minutes

**Tab 5: Practice**
- Links to 5-10 practice problems of increasing difficulty (Easy/Medium/Hard)
- Problems are topic-specific — aligned to the lesson content
- For DSA: pseudocode completion and trace problems
- For DBMS: SQL query writing and normalization exercises
- For OS: scheduling computation and memory address translation
- For CN: subnetting calculations and protocol analysis
- For OOP: design questions and UML exercises
- Solutions available after attempt, with step-by-step explanations
- Estimated time: 10-20 minutes (optional, user-driven)

**Progression Rules:**
- Lessons are sequential within a level; completing all lessons in a level unlocks the next level
- Tab progression is sequential — complete a tab to unlock the next
- A tab is "completed" when the user has either read it fully (concept/walkthrough), interacted with the visualization, or scored 60%+ on the quiz
- Users can revisit completed lessons at any time
- Estimated time per lesson (all tabs): 30-60 minutes
- Lessons are text-first (no video dependency) for low-bandwidth environments

### 10.2 Practice Mode

**Purpose:** Reinforce learning with topic-wise problems.

**Problem Bank Structure:**
Each lesson links to 5-10 practice problems of increasing difficulty. Problems are organized by topic and difficulty.

**Problem Types:**

| Type | Description | Subjects | Example |
|---|---|---|---|
| **Conceptual MCQ** | Test understanding of "why" behind a concept | All | "Why does Dijkstra's algorithm fail with negative edges?" |
| **Trace problem** | "What does this algorithm output on input X?" | DSA, OS, DBMS | "Trace Quicksort with pivot = last element on [3,1,4,1,5,9]" |
| **Pseudocode completion** | Fill in missing lines of an algorithm | DSA, OS | "Complete the missing line in this BFS implementation" |
| **Pseudocode writing** | Write a complete algorithm for a given problem | DSA | "Write pseudocode to find the LCA of two nodes in a BST" |
| **Visualization matching** | Match a visualization state to the correct operation sequence | DSA, DBMS | "Which tree results from inserting 5,3,7,2,4 into a BST?" |
| **Computation** | Calculate a specific value | OS, CN, DBMS | "Calculate page faults for FIFO with 3 frames and reference string [1,2,3,4,1,2,5]" |
| **SQL writing** | Write a query to produce a given result | DBMS | "Write a SQL query to find the second highest salary" |
| **Diagram drawing** | Construct a diagram from given requirements | DBMS, OOP | "Draw the ER diagram for a library management system" |
| **Design question** | Design a class hierarchy or system component | OOP | "Design a parking lot system using OOP principles" |
| **True/False with justification** | State whether a claim is true and explain why | All | "The worst-case time complexity of QuickSort is O(n log n). True or false?" |

**Difficulty Levels:**
- **Easy (1 star):** Direct application of a single concept. Can be solved in < 2 minutes. Targets Bloom's taxonomy levels: Remember, Understand.
- **Medium (2 stars):** Requires combining 2-3 concepts or applying a concept to a non-trivial scenario. Targets: Apply, Analyze.
- **Hard (3 stars):** GATE-level or interview-level difficulty. May require insight, optimization, or creative problem-solving. Targets: Analyze, Evaluate, Create.

**Problem Features:**
- **Hints system:** Each problem has up to 3 progressive hints. Hint 1 is a gentle nudge, Hint 2 gives the approach, Hint 3 gives the key step. Using hints reduces XP award.
- **Solutions:** After submitting an answer (or giving up), a detailed solution is available. Solutions include step-by-step reasoning, complexity analysis, and for algorithm problems, a visualization replay showing the algorithm running on the problem's input.
- **Related problems:** Each problem links to 2-3 similar problems for more practice.
- **Bookmarking:** Users can bookmark problems for later review.
- **Tagging:** Each problem is tagged with: topic, subtopic, difficulty, GATE relevance, company relevance.

**Scoring and XP:**
- Easy correct: +5 XP
- Medium correct: +10 XP
- Hard correct: +20 XP
- Correct on first attempt: +5 XP bonus
- Using hints: -2 XP per hint used
- Perfect streak (10 consecutive correct): +30 XP bonus

**Total estimated problems:** 1,500+ across all subjects

| Subject | Easy | Medium | Hard | Total |
|---|---|---|---|---|
| DSA | 150 | 200 | 80 | 430 |
| CN | 80 | 120 | 50 | 250 |
| OS | 80 | 130 | 60 | 270 |
| DBMS | 80 | 130 | 60 | 270 |
| OOP | 60 | 100 | 50 | 210 |
| **Total** | **450** | **680** | **300** | **1,430** |

### 10.3 GATE Prep Mode

**Purpose:** Dedicated GATE CS/IT examination preparation.

**10.3.1 Topic-Wise Tests**

Each topic has a dedicated 30-minute test:

| Subject | Topic Tests Available | Questions per Test |
|---|---|---|
| DSA — Data Structures | Arrays, Linked Lists, Stacks/Queues, Hashing, Trees, Heaps, Graphs | 15-20 each |
| DSA — Algorithms | Sorting, Searching, Greedy, DP, D&C, Backtracking, Graph Algorithms | 15-20 each |
| OS | Process Management, Scheduling, Synchronization, Deadlock, Memory Management, File Systems, I/O | 15-20 each |
| DBMS | ER Model, Relational Algebra, SQL, Normalization, Transactions, Indexing, Query Processing | 15-20 each |
| CN | OSI/TCP-IP, Data Link, Network Layer, Transport Layer, Application Layer, Security | 15-20 each |
| **Total topic tests** | **~35 tests** | **~600 questions** |

Test features:
- Timer visible throughout
- Question palette showing attempted/unanswered/marked-for-review
- "Mark for Review" flag on any question
- Negative marking toggle (on by default for GATE practice, off for learning)
- Detailed solution after submission with topic-wise breakdown

**10.3.2 Full Mock Tests**

Exact GATE CS format replication:

| Section | Questions | Marks | Time |
|---|---|---|---|
| General Aptitude | 10 (5 x 1-mark + 5 x 2-mark) | 15 | ~20 min (self-paced within 3hr) |
| Technical — Section 1 | 25 (MCQ + MSQ + NAT) | 35 | ~80 min |
| Technical — Section 2 | 30 (MCQ + MSQ + NAT) | 50 | ~80 min |
| **Total** | **65** | **100** | **180 min** |

Question type distribution:
- **MCQ (Single Correct):** ~30% of questions. 4 options, 1 correct. Negative marking: -1/3 for 1-mark, -2/3 for 2-mark.
- **MSQ (Multiple Select):** ~30% of questions. 4 options, 1+ correct. Full marks only if all correct selected. No partial, no negative.
- **NAT (Numerical Answer Type):** ~40% of questions. Open numeric input. Answer correct within a specified range (e.g., 2.5 to 2.7). No negative marking.

Mock test features:
- Virtual calculator (same as GATE exam)
- Section navigation (can switch between sections)
- Question palette with color-coded status
- Auto-submit on time expiry
- Immediate scoring with detailed analysis after submission

Target: 15 full mock tests at launch (Phase 3), 30 by end of Phase 4.

**10.3.3 Previous Year Questions (PYQ)**

GATE CS papers from 2015-2025 (~385 questions) mapped to the curriculum:

| Year | Total Qs | Mapped to DSA | Mapped to OS | Mapped to DBMS | Mapped to CN | Other (Math, DL, CO, GA) |
|---|---|---|---|---|---|---|
| 2025 | 65 | 12 | 8 | 7 | 6 | 32 |
| 2024 | 65 | 11 | 9 | 8 | 5 | 32 |
| 2023 | 65 | 13 | 7 | 7 | 7 | 31 |
| 2022 | 65 | 10 | 8 | 8 | 6 | 33 |
| 2021 | 65 | 12 | 7 | 7 | 7 | 32 |
| 2020 | 65 | 11 | 9 | 6 | 6 | 33 |
| 2019 | 65 | 13 | 8 | 7 | 5 | 32 |
| 2018 | 65 | 10 | 8 | 8 | 7 | 32 |
| 2017 | 65 | 12 | 7 | 7 | 6 | 33 |
| 2016 | 65 | 11 | 9 | 8 | 5 | 32 |
| 2015 | 65 | 12 | 8 | 7 | 6 | 32 |

Each PYQ entry includes:
- **Year and paper:** e.g., GATE CS 2024, Set 1
- **Question type:** MCQ / MSQ / NAT
- **Marks:** 1 or 2
- **Topic:** e.g., "Trees — BST deletion"
- **Mapped lesson:** Direct link to the relevant lesson (e.g., DSA 3.2)
- **Difficulty rating:** Easy / Medium / Hard (community-rated)
- **Detailed solution:** Step-by-step solution with visualization where applicable
- **Common mistakes:** What most students get wrong and why

PYQ access points:
- From within a lesson: "Related GATE Questions" section shows all PYQs for that topic
- From GATE Prep hub: centralized PYQ bank with filtering by year, topic, type, difficulty
- From full mock test review: each question linked to its PYQ entry (if applicable)

**10.3.4 Performance Analytics**

After each test (topic-wise or mock), the student receives:

- **Overall score:** marks obtained vs maximum marks, percentile estimate
- **Subject-wise breakdown:** bar chart showing performance in each subject area
- **Topic-wise accuracy heatmap:** green (80%+), yellow (50-80%), red (<50%) for each topic
- **Comparison with cutoffs:**
  - GATE qualifying cutoff (General: ~25/100, OBC-NCL: ~22.5/100, SC/ST: ~16.67/100)
  - Top IIT cutoff (General: ~700+ GATE score)
  - Top NIT cutoff (General: ~500+ GATE score)
- **Weak area identification:** Topics scoring < 50% are flagged with recommended lessons to revisit
- **Trend analysis:** Score progression across multiple mock tests shown as a line graph
- **Time analysis:** Average time per question by topic, identifying time sinks
- **Accuracy vs speed matrix:** scatter plot of (time spent, accuracy) per question — reveals rush errors vs knowledge gaps

**10.3.5 Study Planner**

Input:
- GATE exam date
- Current proficiency self-assessment (beginner / intermediate / advanced for each subject)
- Available study hours per day
- Subjects to focus on (all / custom selection)

Output:
- A day-by-day study plan from current date to exam date
- Phase 1 (Concept building): Learn mode lessons, 2-3 lessons per day
- Phase 2 (Practice): Practice mode problems, 15-20 problems per day
- Phase 3 (Testing): Topic-wise tests, 1-2 per day
- Phase 4 (Revision): PYQ practice + full mock tests, 2 mocks per week
- Weekly review checkpoints with progress milestones
- Adaptive: if the student falls behind or ahead, the plan adjusts

### 10.4 Placement Prep Mode

**Purpose:** Prepare for technical interviews at top product companies.

**10.4.1 Company-Specific Question Banks**

Curated question sets for 8 major recruiters, sourced from interview experience archives:

| Company | Question Count | Primary Topics | Interview Rounds |
|---|---|---|---|
| **Amazon** | 120 | Arrays, DP, Hashing, Trees, OOP, System Design | OA → Technical 1 → Technical 2 → Bar Raiser → HR |
| **Google** | 100 | Graphs, DP, Binary Search, Strings, System Design | Phone Screen → Onsite (4-5 rounds) → Team Match |
| **Microsoft** | 110 | DSA (balanced), OOP, OS, DBMS, System Design | OA → Group Fly → Technical 1 → Technical 2 → HR |
| **Flipkart** | 90 | DSA, DBMS, System Design | OA → Machine Coding → Technical → System Design → HR |
| **Adobe** | 80 | OOP, Design Patterns, SOLID, DSA | OA → Technical 1 → Technical 2 → Director Round |
| **Goldman Sachs** | 70 | DSA (DP, Arrays), SQL, Puzzles | OA → Technical 1 → Technical 2 → Managerial |
| **Samsung** | 60 | OS, DSA (DFS/BFS), CN | Coding Test (3hr, 1 problem) → Technical → HR |
| **Qualcomm** | 50 | OS, CN, Embedded Systems, DSA | OA → Technical 1 → Technical 2 → HR |
| **Total** | **680** | | |

Each question includes:
- Company tag and year reported
- Interview round (OA / Technical / System Design / HR)
- Topic tags (e.g., "Arrays", "DP", "Binary Search")
- Difficulty (Easy / Medium / Hard)
- Full solution with multiple approaches (brute force → optimal)
- Time and space complexity analysis
- "Interviewer follow-ups": common follow-up questions that interviewers ask after the initial solution

**10.4.2 Interview Simulation**

Four-round mock interview simulation:

**Round 1 — Online Assessment (OA)**
- 2-3 pseudocode problems, 60-minute timer
- Difficulty: 1 Easy + 1 Medium + 1 Hard (or 2 Medium)
- Auto-graded against test cases
- Scoring: partial credit for passing some test cases
- Results: score, time analysis, comparison with peers

**Round 2 — Technical Interview Simulation**
- 1-2 algorithm problems presented one at a time
- The system plays the role of interviewer:
  - Presents the problem
  - Expects the student to "think aloud" (guided prompts)
  - Asks for approach first, then pseudocode, then complexity analysis
  - Provides hints if the student is stuck (3 progressive hints)
  - Asks follow-up questions: "Can you optimize?", "What if the input is sorted?", "What about edge cases?"
- Visualization tool available for whiteboard-style explanation
- Evaluated on: problem-solving approach, correctness, optimization, communication

**Round 3 — System Design Simulation**
- 1 system design question (e.g., "Design a URL shortener", "Design a chat system")
- Whiteboard canvas for drawing architecture diagrams
- Guided prompts:
  - "What are the functional requirements?"
  - "What are the non-functional requirements (scale, latency)?"
  - "What's your high-level architecture?"
  - "How would you design the database schema?"
  - "How do you handle scaling?"
- Topics covered: load balancing, caching, database choice (SQL vs NoSQL), message queues, CDN, sharding
- Cross-references to CN Level 7 (cloud, CDN), DBMS Level 7 (NoSQL, CAP), OS Level 7 (distributed)

**Round 4 — HR/Behavioral Simulation**
- Common behavioral questions with STAR framework guidance:
  - "Tell me about a time you faced a conflict in a team"
  - "Describe a challenging project and how you handled it"
  - "Why do you want to work at [Company]?"
- Amazon-specific: Leadership Principles alignment questions
- Tips panel with do's and don'ts for each question type

**10.4.3 Placement Calendar**

A timeline view of typical campus placement seasons:
- **August-September:** Early recruiters (Goldman Sachs, Samsung, Qualcomm)
- **September-October:** Dream companies (Amazon, Microsoft, Flipkart, Adobe)
- **October-November:** Super dream (Google, Meta, Uber)
- **Year-round:** Off-campus drives, startup hiring

The calendar aligns with preparation milestones: "3 months before Amazon OA, you should have completed DSA Levels 1-6 and OOP Levels 1-4."

**10.4.4 Topic Frequency Matrix**
See Section 13 for the complete company x topic frequency matrix.

**10.4.5 Interview Tips Library**
- Company-specific tips (e.g., "Amazon values working backward from the customer — frame your answers accordingly")
- Common mistakes by topic (e.g., "In DP problems, most students forget the base case")
- Communication tips: how to think aloud, how to ask clarifying questions, how to handle "I don't know"
- Offer negotiation basics: typical CTC ranges, how to evaluate offers

### 10.5 Exam Prep Mode

**Purpose:** University semester examination preparation.

**10.5.1 University-Aligned Question Banks**

Questions matching typical B.Tech CSE semester exam patterns:

| Question Type | Marks Range | Format | Count (per subject) |
|---|---|---|---|
| **Very Short Answer** | 2 marks | Define/list/differentiate — 2-3 lines expected | 40 |
| **Short Answer** | 5 marks | Explain with example or diagram — half page | 30 |
| **Long Answer** | 10 marks | Detailed explanation with derivation, example, diagram — 1-2 pages | 20 |
| **Numerical Problem** | 5-10 marks | Compute specific value with shown working | 30 |
| **Diagram-Based** | 5-10 marks | Draw and label (ER diagram, Gantt chart, B-tree, etc.) | 15 |
| **Total per subject** | | | **135** |
| **Total across 5 subjects** | | | **675** |

Example questions by type:
- **Very Short (2 marks):** "Define deadlock. List its four necessary conditions."
- **Short (5 marks):** "Explain the difference between paging and segmentation with a diagram."
- **Long (10 marks):** "Explain Dijkstra's shortest path algorithm. Trace it on the given graph and analyze its time complexity."
- **Numerical (5 marks):** "A system has 3 page frames. For the reference string 7,0,1,2,0,3,0,4,2,3,0,3,2, calculate the number of page faults using LRU page replacement."
- **Diagram (10 marks):** "Draw the B+ tree of order 4 after inserting the keys: 5, 8, 1, 7, 3, 12, 9, 6. Show all intermediate steps."

**10.5.2 Semester-Wise Organization**

Standard B.Tech CSE semester mapping (customizable):

| Semester | Typical Subjects | Our Coverage | When Students Need It |
|---|---|---|---|
| **Semester 3** | Data Structures, OOP, Discrete Mathematics | DSA Levels 1-5, OOP Levels 1-4 | September-November (mid-sem), February-April (end-sem) |
| **Semester 4** | Algorithms, DBMS, Computer Organization | DSA Levels 5-7, DBMS Levels 1-6 | September-November, February-April |
| **Semester 5** | Operating Systems, Computer Networks | OS Levels 1-7, CN Levels 1-7 | September-November, February-April |
| **Semester 6** | Software Engineering, Compiler Design, Electives | OOP Level 4-6 (design patterns, SOLID) | September-November, February-April |

Notes:
- Semester mapping varies significantly by university. Students can override the default mapping with their specific university's curriculum.
- The platform will progressively add university-specific mappings for top 20 universities (VTU, AKTU, Mumbai Univ, Anna Univ, JNTU, Pune Univ, MAKAUT, RGPV, SPPU, GTU, etc.).

**10.5.3 University Paper Pattern Reference**

Common patterns across major Indian technical universities:

| University | Internal Assessment | External Exam | Question Paper Pattern |
|---|---|---|---|
| **VTU (Karnataka)** | 50 marks (CIE) | 100 marks (SEE) | 5 modules, 2 full questions per module (choice), 10 marks each |
| **AKTU (UP)** | 30 marks | 70 marks | 7 questions, attempt 5, mix of short/long |
| **Mumbai University** | 20 marks | 80 marks | 5 questions, internal choice, compulsory Q1 |
| **Anna University (TN)** | 20 marks | 80 marks | Part A (10 x 2 marks), Part B (5 x 13 marks) or (5 x 16 marks) |
| **JNTU (Telangana)** | 30 marks | 70 marks | 5 units, 2 questions per unit, 10 marks each |
| **Pune University (SPPU)** | 30 marks | 70 marks | 4 questions with sub-parts, internal choice |

**10.5.4 Quick Revision Notes**

Each lesson has a condensed revision note:
- **1-page summary** of the entire lesson's key concepts
- **Key definitions** highlighted and numbered
- **Key formulas/rules** in a bordered callout box
- **Common exam questions** for that topic (3-5 most frequently asked)
- **Diagram quick-draws:** essential diagrams to practice drawing (e.g., "AVL rotation: LL, RR, LR, RL — practice drawing each in under 30 seconds")
- **Mnemonics and memory aids** where applicable (e.g., "ACID: Atomicity, Consistency, Isolation, Durability")

Revision notes are accessible:
- From within the lesson (a "Quick Revision" tab)
- From a centralized "Revision Hub" that lists all notes by subject and level
- As downloadable PDFs for offline study

**10.5.5 Formula Sheets**

Per-subject formula sheets for exam hall preparation:

| Subject | Key Formulas/Rules Count | Example Content |
|---|---|---|
| **DSA** | 25 | Big-O rules, Master Theorem, recurrence relations, DP formulas |
| **CN** | 30 | Shannon theorem, Nyquist, CRC division, subnetting formulas, TCP throughput, efficiency of sliding window |
| **OS** | 25 | Turnaround/waiting/response time, EAT with TLB, page fault rate, Banker's safety algorithm steps |
| **DBMS** | 20 | Normalization rules, B-tree height calculation, cost of join algorithms, FD closure rules, Armstrong's axioms |
| **OOP** | 10 | SOLID acronym expansion, design pattern categories, MRO rules |

Formula sheets are available as:
- In-app reference (accessible during practice, not during mock tests)
- Downloadable PDF (single page per subject, printer-friendly)
- Flashcard format (for Leitner spaced repetition)

---

## 11. Assessment System

### 11.1 Question Types

| Type | Format | Used In | Scoring |
|---|---|---|---|
| **Single Correct MCQ** | 4 options, 1 correct | Learn, Practice, GATE, Exam | +1 or +2 marks; -1/3 negative marking in GATE mode |
| **Multiple Correct MCQ (MSQ)** | 4 options, 1+ correct | GATE, Practice | Full marks only if all correct options selected; no negative marking |
| **Numerical Answer Type (NAT)** | Open numeric input, answer within range | GATE, Practice | +1 or +2 marks; no negative marking |
| **Trace/Output questions** | "What is the output of this algorithm on input X?" | Learn, Practice, Placement | Includes visualization replay for verification |
| **Pseudocode completion** | Fill in missing lines of pseudocode | Practice, Placement | Checked against reference solution |
| **Visualization matching** | "Which visualization represents this operation?" | Learn, Practice | Multiple choice with diagram options |
| **Diagram drawing** | "Draw the ER diagram / B-tree / Gantt chart for..." | Exam Prep | Manual evaluation or structured input (drag-and-drop) |

### 11.2 Question Bank Size (Target)

| Subject | Easy | Medium | Hard | Total |
|---|---|---|---|---|
| DSA | 120 | 200 | 80 | 400 |
| CN | 80 | 120 | 50 | 250 |
| OS | 80 | 130 | 60 | 270 |
| DBMS | 80 | 130 | 60 | 270 |
| OOP | 60 | 100 | 50 | 210 |
| **Total** | **420** | **680** | **300** | **1,400** |

### 11.3 GATE Previous Year Questions

| Year | Total Questions Mapped | Subjects Covered |
|---|---|---|
| 2025 | ~35 | DSA, OS, DBMS, CN |
| 2024 | ~35 | DSA, OS, DBMS, CN |
| 2023 | ~35 | DSA, OS, DBMS, CN |
| 2022 | ~35 | DSA, OS, DBMS, CN |
| 2021 | ~35 | DSA, OS, DBMS, CN |
| 2020 | ~35 | DSA, OS, DBMS, CN |
| 2019 | ~35 | DSA, OS, DBMS, CN |
| 2018 | ~35 | DSA, OS, DBMS, CN |
| 2017 | ~35 | DSA, OS, DBMS, CN |
| 2016 | ~35 | DSA, OS, DBMS, CN |
| 2015 | ~35 | DSA, OS, DBMS, CN |
| **Total** | **~385** | |

### 11.4 Assessment Integration with Lessons

Every lesson includes:
1. **Pre-quiz prediction:** 1-2 prediction questions before the lesson (PredictionGate pattern from School Track)
2. **In-lesson quiz:** 3-5 MCQs testing the lesson's learning objectives (QuizCard pattern)
3. **Post-lesson practice:** Link to 5-10 practice problems of increasing difficulty
4. **GATE PYQ link:** Links to relevant GATE previous year questions for that topic
5. **Spaced repetition:** Flashcards (Leitner system, same as School Track) for key definitions and formulas

### 11.5 Detailed Assessment Flow Per Lesson

```
Lesson Start
  │
  ├── PredictionGate (1-2 questions)
  │     "Before you learn this topic, what do you think...?"
  │     Records answer, shown again after lesson for self-reflection
  │
  ├── Tab 1: Concept ───── No assessment (pure learning)
  │
  ├── Tab 2: Visualization ── Mini-challenge embedded
  │     "Predict what happens next" at key animation steps
  │     Not graded, but builds intuition
  │
  ├── Tab 3: Walkthrough ── Trace exercise
  │     "Trace the algorithm on input [4, 2, 7, 1] — what is the output?"
  │     Self-check with visualization replay for verification
  │
  ├── Tab 4: Quiz ───────── 3-5 graded MCQs
  │     Immediate feedback per question
  │     Overall score shown at end
  │     Must score 60%+ to mark tab "complete"
  │     XP awarded based on score
  │
  ├── Tab 5: Practice ──── 5-10 graded problems
  │     External to the lesson (opens Practice Mode for this topic)
  │     XP and coins awarded per problem
  │     Problems are optional but contribute to mastery score
  │
  └── Lesson Complete
        XP bonus awarded
        Flashcards generated for Leitner review
        Next lesson unlocked
```

### 11.6 Mastery Score

Each lesson has a **mastery score** (0-100%) computed from:

| Component | Weight | Source |
|---|---|---|
| Quiz score | 40% | Tab 4 quiz results |
| Practice problems solved | 30% | Number and difficulty of practice problems completed |
| Visualization interaction | 15% | Time spent with visualization, inputs tried, challenges completed |
| Spaced repetition retention | 15% | Flashcard accuracy in Leitner system over time |

Mastery score thresholds:
- **< 40%:** Needs review (red indicator)
- **40-70%:** Developing (yellow indicator)
- **70-90%:** Proficient (green indicator)
- **90-100%:** Mastered (gold indicator with star)

Subject-level mastery is the weighted average of all lesson mastery scores within that subject. This feeds into the GATE Prep and Placement Prep analytics.

### 11.7 Spaced Repetition System

Extending the School Track's Leitner box system:

- Each lesson generates 5-10 flashcards covering key definitions, formulas, and concepts
- Cards are organized into 5 Leitner boxes:
  - Box 1: Review daily (new/forgotten cards)
  - Box 2: Review every 2 days
  - Box 3: Review every 4 days
  - Box 4: Review every 8 days
  - Box 5: Review every 16 days (mastered)
- Getting a card correct moves it up one box; getting it wrong sends it back to Box 1
- Daily review session: the Review page shows all due cards from Box 1-5
- Estimated total flashcards: ~1,200 across all subjects (176 lessons x ~7 cards per lesson)

Flashcard examples:
- **DSA:** "What is the time complexity of building a heap from an array?" → "O(n) — not O(n log n) because the sum of heights converges"
- **CN:** "What are the 3 messages in a TCP 3-way handshake?" → "SYN, SYN-ACK, ACK"
- **OS:** "What are the 4 necessary conditions for deadlock?" → "Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait"
- **DBMS:** "What does BCNF require?" → "Every determinant must be a superkey"
- **OOP:** "What does the Liskov Substitution Principle state?" → "Subtypes must be substitutable for their base types without altering program correctness"

---

## 12. GATE CS Mapping — Complete Topic-to-Lesson Matrix

### 12.1 GATE CS Syllabus → Lesson Mapping

#### Engineering Mathematics (not covered in Engineering Track — separate module planned)

#### Digital Logic (not covered — separate module planned)

#### Computer Organization and Architecture (not covered — separate module planned)

#### Programming and Data Structures

| GATE Topic | Mapped Lessons | Estimated Marks (out of 100) |
|---|---|---|
| Programming in C (variables, control flow, functions, pointers, arrays, strings) | Not covered — language-specific (pseudocode approach instead) | 3-5 |
| Recursion | DSA 6.1 (Recursion), DSA 6.2 (Backtracking) | 2-3 |
| Arrays | DSA 1.4 (Arrays), DSA 1.6 (Two Pointer) | 2-3 |
| Stacks | DSA 2.3 (Stacks) | 1-2 |
| Queues | DSA 2.4 (Queues), DSA 2.6 (Deque) | 1-2 |
| Linked Lists | DSA 2.1 (Singly), DSA 2.2 (Doubly/Circular) | 2-3 |
| Trees | DSA 3.1 (Binary Trees), DSA 3.2 (BST), DSA 3.3 (AVL), DSA 3.4 (Heaps) | 3-5 |
| Binary Search Trees | DSA 3.2 (BST), DSA 3.3 (AVL) | 2-3 |
| Binary Heaps | DSA 3.4 (Heaps) | 1-2 |
| Hashing | DSA 2.5 (Hash Tables) | 2-3 |
| Graphs | DSA 4.1-4.7 (entire Graphs level) | 3-5 |
| **Subtotal** | | **~15-20** |

#### Algorithms

| GATE Topic | Mapped Lessons | Estimated Marks |
|---|---|---|
| Searching | DSA 5.6 (Binary Search) | 1-2 |
| Sorting | DSA 5.1-5.5 (all sorting lessons) | 2-3 |
| Asymptotic Analysis | DSA 1.2 (Big-O), DSA 1.3 (Space Complexity) | 2-3 |
| Graph Algorithms (BFS, DFS, MST, Shortest Path) | DSA 4.2-4.7 | 3-5 |
| Greedy Algorithms | DSA 6.4 (Greedy) | 2-3 |
| Dynamic Programming | DSA 6.5 (1D DP), DSA 6.6 (2D DP) | 4-6 |
| Divide and Conquer | DSA 6.3 (D&C) | 1-2 |
| **Subtotal** | | **~15-20** |

#### Databases

| GATE Topic | Mapped Lessons | Estimated Marks |
|---|---|---|
| ER Model | DBMS 1.2 (ER Model), DBMS 1.4 (ER to Relational) | 2-3 |
| Relational Model | DBMS 1.3 (Relational Model), DBMS 1.5 (Relational Algebra) | 2-3 |
| SQL | DBMS 2.1-2.5 (all SQL lessons) | 2-3 |
| Normalization | DBMS 3.1-3.4 (all normalization lessons) | 3-4 |
| Transactions and Concurrency Control | DBMS 4.1-4.5 (all transaction lessons) | 2-3 |
| Indexing (B/B+ Trees) | DBMS 5.2 (B-Tree), DBMS 5.3 (B+ Tree) | 2-3 |
| File Organization | DBMS 5.1 (File Organization), DBMS 5.4 (Hashing) | 1-2 |
| **Subtotal** | | **~12-15** |

#### Operating Systems

| GATE Topic | Mapped Lessons | Estimated Marks |
|---|---|---|
| Processes and Threads | OS 1.2 (Processes), OS 1.4 (Threads), OS 2.5 (Process Creation) | 2-3 |
| CPU Scheduling | OS 2.1-2.4 (all scheduling lessons) | 3-4 |
| Synchronization | OS 3.1-3.3 (Critical Section, Semaphores, Classic Problems) | 3-4 |
| Deadlock | OS 3.4 (Deadlock), OS 3.5 (Banker's) | 2-3 |
| Memory Management | OS 4.1-4.5 (all memory lessons) | 3-5 |
| File Systems | OS 5.1-5.3 (all file system lessons) | 1-2 |
| I/O Systems | OS 6.1-6.3 (I/O, Disk Scheduling, RAID) | 1-2 |
| **Subtotal** | | **~12-15** |

#### Computer Networks

| GATE Topic | Mapped Lessons | Estimated Marks |
|---|---|---|
| OSI/TCP/IP Models | CN 1.3 (OSI), CN 1.4 (TCP/IP) | 1-2 |
| Data Link Layer (Framing, Error Detection, MAC) | CN 2.2-2.4 (Framing, ARQ, MAC) | 2-3 |
| Sliding Window Protocols | CN 2.3 (Stop-Wait, Go-Back-N, Selective Repeat) | 2-3 |
| Network Layer (IP Addressing, Subnetting, Routing) | CN 3.1-3.5 (all network layer lessons) | 3-5 |
| Transport Layer (TCP, UDP, Flow/Congestion Control) | CN 4.1-4.5 (all transport layer lessons) | 3-4 |
| Application Layer (DNS, HTTP) | CN 5.1-5.2 (DNS, HTTP) | 1-2 |
| Network Security | CN 6.1-6.4 (all security lessons) | 1-2 |
| **Subtotal** | | **~10-14** |

### 12.2 GATE Marks Distribution Summary

| Subject Area | Estimated GATE Marks (out of 100) | Lesson Coverage |
|---|---|---|
| Programming & Data Structures | 15-20 | DSA Levels 1-3, partial Level 4 |
| Algorithms | 15-20 | DSA Levels 4-7 |
| Databases | 12-15 | DBMS Levels 1-6 |
| Operating Systems | 12-15 | OS Levels 1-6 |
| Computer Networks | 10-14 | CN Levels 1-6 |
| Engineering Mathematics | 13-15 | Not covered (separate module) |
| Digital Logic | 3-5 | Not covered (separate module) |
| Computer Organization | 5-8 | Not covered (separate module) |
| General Aptitude | 15 | Not covered (separate module) |

**Engineering Track GATE Coverage: ~65-75 marks out of 100** (the remaining 25-35 marks are Engineering Math, Digital Logic, Computer Organization, and General Aptitude, planned as future modules).

### 12.3 GATE CS Topic Frequency Analysis (2015-2025)

Historical analysis of GATE CS papers showing how frequently each topic appears:

#### Data Structures — Yearly Question Count

| Topic | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Total | Avg/Year |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Arrays & Strings | 1 | 2 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | 1 | 2 | 15 | 1.4 |
| Linked Lists | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 9 | 0.8 |
| Stacks & Queues | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 1 | 9 | 0.8 |
| Hashing | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 11 | 1.0 |
| Binary Trees & BST | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 17 | 1.5 |
| Heaps | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 7 | 0.6 |
| Graphs | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 20 | 1.8 |
| **DS Total** | **9** | **8** | **8** | **7** | **8** | **8** | **8** | **7** | **8** | **7** | **10** | **88** | **8.0** |

#### Algorithms — Yearly Question Count

| Topic | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Total | Avg/Year |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Asymptotic Analysis | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 11 | 1.0 |
| Sorting & Searching | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 10 | 0.9 |
| Graph Algorithms | 1 | 2 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | 1 | 1 | 14 | 1.3 |
| Greedy | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 10 | 0.9 |
| Dynamic Programming | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | 23 | 2.1 |
| Divide & Conquer | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 5 | 0.5 |
| Recursion & Backtracking | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 6 | 0.5 |
| **Algo Total** | **7** | **8** | **7** | **7** | **8** | **7** | **6** | **7** | **8** | **7** | **7** | **79** | **7.2** |

#### Operating Systems — Yearly Question Count

| Topic | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Total | Avg/Year |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Processes & Threads | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 11 | 1.0 |
| CPU Scheduling | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 12 | 1.1 |
| Synchronization | 2 | 1 | 1 | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 14 | 1.3 |
| Deadlock | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 9 | 0.8 |
| Memory Management | 2 | 2 | 1 | 1 | 2 | 2 | 1 | 2 | 1 | 2 | 2 | 18 | 1.6 |
| File Systems & I/O | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 11 | 1.0 |
| **OS Total** | **8** | **7** | **6** | **7** | **7** | **7** | **6** | **7** | **6** | **7** | **7** | **75** | **6.8** |

#### DBMS — Yearly Question Count

| Topic | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Total | Avg/Year |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ER Model | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 9 | 0.8 |
| Relational Algebra & SQL | 2 | 1 | 2 | 1 | 1 | 2 | 2 | 1 | 1 | 2 | 1 | 16 | 1.5 |
| Normalization | 1 | 2 | 1 | 2 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 15 | 1.4 |
| Transactions & Concurrency | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 12 | 1.1 |
| Indexing (B/B+ Trees) | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 11 | 1.0 |
| File Organization | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 4 | 0.4 |
| **DBMS Total** | **6** | **7** | **5** | **6** | **6** | **6** | **6** | **7** | **6** | **6** | **6** | **67** | **6.1** |

#### Computer Networks — Yearly Question Count

| Topic | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Total | Avg/Year |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| OSI/TCP-IP Model | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 5 | 0.5 |
| Data Link (Framing, Error, MAC) | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 9 | 0.8 |
| Sliding Window Protocols | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 8 | 0.7 |
| IP Addressing & Subnetting | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 13 | 1.2 |
| Routing | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 9 | 0.8 |
| TCP/UDP | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 11 | 1.0 |
| Application Layer (DNS, HTTP) | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 4 | 0.4 |
| **CN Total** | **6** | **6** | **5** | **5** | **6** | **5** | **5** | **5** | **7** | **4** | **5** | **59** | **5.4** |

### 12.4 High-Yield GATE Topics (Pareto Analysis)

The following 15 topics account for approximately 60% of GATE CS marks from the subjects we cover. Students should prioritize these:

| Rank | Topic | Avg Marks/Year | Subject | Lesson(s) |
|---|---|---|---|---|
| 1 | Dynamic Programming | 4-6 | DSA | 6.5, 6.6, 8.5 |
| 2 | Memory Management (Paging, Virtual Memory, TLB) | 3-5 | OS | 4.2, 4.3, 4.4, 4.5 |
| 3 | Graphs (BFS, DFS, Shortest Path, MST) | 3-5 | DSA | 4.1-4.7, 7.5 |
| 4 | Normalization (1NF-BCNF, FDs) | 3-4 | DBMS | 3.1, 3.2, 3.3 |
| 5 | IP Addressing & Subnetting | 3-4 | CN | 3.1, 3.2 |
| 6 | CPU Scheduling | 3-4 | OS | 2.1, 2.2, 2.3, 2.4 |
| 7 | Trees (BST, AVL, Heaps) | 3-4 | DSA | 3.1-3.4 |
| 8 | Synchronization (Semaphores, Deadlock) | 3-4 | OS | 3.1-3.5 |
| 9 | TCP/UDP & Congestion Control | 3-4 | CN | 4.1-4.4 |
| 10 | SQL & Relational Algebra | 3-4 | DBMS | 1.5, 2.1-2.4 |
| 11 | Hashing | 2-3 | DSA | 2.5 |
| 12 | Transactions & Concurrency Control | 2-3 | DBMS | 4.1-4.4 |
| 13 | Sliding Window Protocols | 2-3 | CN | 2.3 |
| 14 | B/B+ Trees | 2-3 | DBMS | 5.2, 5.3 |
| 15 | Asymptotic Analysis & Recurrences | 2-3 | DSA | 1.2, 1.3, 6.3 |

---

## 13. Placement Interview Mapping — Company x Topic Frequency Matrix

### 13.1 Topic Frequency by Company

Frequency scale: 5 = Almost every interview, 4 = Very common, 3 = Common, 2 = Occasional, 1 = Rare

| Topic | Amazon | Google | Microsoft | Flipkart | Adobe | Goldman Sachs | Samsung | Meta | Uber |
|---|---|---|---|---|---|---|---|---|---|
| **DSA — Arrays & Strings** | 5 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 5 |
| **DSA — Linked Lists** | 4 | 3 | 4 | 3 | 3 | 3 | 3 | 3 | 3 |
| **DSA — Stacks & Queues** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 |
| **DSA — Hashing** | 5 | 5 | 5 | 5 | 4 | 4 | 3 | 5 | 5 |
| **DSA — Trees (BST, Binary Tree)** | 5 | 5 | 5 | 4 | 4 | 4 | 4 | 5 | 4 |
| **DSA — Heaps & Priority Queues** | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 4 | 4 |
| **DSA — Graphs (BFS, DFS)** | 4 | 5 | 4 | 4 | 3 | 3 | 3 | 5 | 4 |
| **DSA — Shortest Path (Dijkstra)** | 3 | 4 | 3 | 3 | 2 | 2 | 2 | 4 | 4 |
| **DSA — Dynamic Programming** | 5 | 5 | 4 | 5 | 4 | 5 | 3 | 5 | 5 |
| **DSA — Greedy** | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 3 | 3 |
| **DSA — Sorting & Searching** | 4 | 4 | 4 | 4 | 3 | 4 | 3 | 4 | 4 |
| **DSA — Binary Search** | 5 | 5 | 4 | 4 | 3 | 3 | 3 | 4 | 4 |
| **DSA — Recursion & Backtracking** | 4 | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 4 |
| **DSA — Bit Manipulation** | 3 | 3 | 3 | 2 | 2 | 3 | 3 | 3 | 2 |
| **DSA — Tries** | 3 | 4 | 3 | 2 | 2 | 2 | 1 | 3 | 3 |
| **DSA — Segment Trees/BIT** | 2 | 3 | 2 | 2 | 1 | 1 | 1 | 2 | 2 |
| **CN — TCP/UDP** | 3 | 2 | 3 | 2 | 2 | 2 | 3 | 2 | 3 |
| **CN — HTTP/DNS** | 3 | 3 | 3 | 3 | 2 | 2 | 2 | 3 | 3 |
| **CN — Subnetting & IP** | 2 | 2 | 2 | 2 | 2 | 1 | 3 | 2 | 2 |
| **CN — OSI/TCP Model** | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 |
| **OS — Process & Threads** | 3 | 3 | 4 | 3 | 3 | 2 | 4 | 3 | 3 |
| **OS — Synchronization (Mutex, Semaphore)** | 3 | 3 | 4 | 3 | 3 | 2 | 4 | 3 | 3 |
| **OS — Deadlock** | 3 | 2 | 3 | 2 | 2 | 2 | 3 | 2 | 2 |
| **OS — Memory (Paging, Virtual)** | 3 | 2 | 3 | 2 | 2 | 2 | 4 | 2 | 2 |
| **OS — CPU Scheduling** | 2 | 2 | 3 | 2 | 2 | 2 | 3 | 2 | 2 |
| **DBMS — SQL** | 4 | 3 | 4 | 4 | 4 | 4 | 2 | 3 | 3 |
| **DBMS — Normalization** | 3 | 2 | 3 | 3 | 3 | 2 | 2 | 2 | 2 |
| **DBMS — Transactions & ACID** | 3 | 2 | 3 | 3 | 2 | 3 | 2 | 2 | 3 |
| **DBMS — Indexing (B-tree)** | 3 | 2 | 3 | 3 | 2 | 2 | 2 | 2 | 2 |
| **DBMS — NoSQL & CAP** | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 3 | 4 |
| **OOP — Pillars (Encap, Inherit, Poly)** | 4 | 3 | 4 | 3 | 5 | 3 | 3 | 3 | 3 |
| **OOP — Design Patterns** | 3 | 3 | 4 | 3 | 5 | 2 | 2 | 3 | 3 |
| **OOP — SOLID Principles** | 3 | 3 | 4 | 3 | 4 | 2 | 2 | 3 | 3 |
| **System Design (uses all subjects)** | 5 | 5 | 5 | 5 | 4 | 4 | 3 | 5 | 5 |

### 13.2 Company-Specific Preparation Paths

| Company | Primary Focus | Recommended Lesson Path |
|---|---|---|
| **Amazon** | DSA (arrays, DP, hashing), OOP, System Design, Leadership Principles | DSA Levels 1-6 → OOP Levels 1-5 → DBMS Level 7 (NoSQL, CAP) → CN Level 7 (CDN, cloud) |
| **Google** | Algorithms (graphs, DP, binary search), System Design | DSA Levels 1-7 (full) → CN Level 7 (modern protocols) → OS Level 7 (distributed) |
| **Microsoft** | DSA + OOP + OS + DBMS (well-rounded) | DSA Levels 1-6 → OOP Levels 1-5 → OS Levels 1-3 → DBMS Levels 1-3 |
| **Flipkart** | DSA + DBMS + System Design | DSA Levels 1-6 → DBMS Levels 1-6 → CN Level 7 → OOP Level 4 (patterns) |
| **Adobe** | OOP (design patterns, SOLID) + DSA | OOP Levels 1-6 (full) → DSA Levels 1-6 |
| **Goldman Sachs** | DSA (DP, arrays, hashing) + Puzzles + SQL | DSA Levels 1-6 → DBMS Level 2 (SQL) → DSA Level 7 (bit manipulation) |
| **Samsung** | OS + DSA + CN | OS Levels 1-6 → DSA Levels 1-5 → CN Levels 1-4 |

---

## 14. Gamification Integration

The Engineering Track uses the **same gamification engine** as the School Track, powered by the existing `gamification.ts` store. The engine is shared across tracks, meaning XP, coins, streaks, levels, and badges accumulate regardless of which track the user is in.

### 14.1 XP System

| Action | XP Awarded |
|---|---|
| Complete a lesson tab | +20 XP |
| Complete an entire lesson (all tabs) | +50 XP bonus |
| Complete a level (all lessons) | +200 XP bonus |
| Correct quiz answer (Easy) | +5 XP |
| Correct quiz answer (Medium) | +10 XP |
| Correct quiz answer (Hard) | +15 XP |
| Perfect quiz score (all correct) | +25 XP bonus |
| Complete a GATE mock test | +100 XP |
| Complete a practice problem | +10 XP |
| Submit a visualization challenge | +15 XP |
| Daily streak (consecutive day) | +10 XP per day |
| 7-day streak bonus | +50 XP |
| 30-day streak bonus | +200 XP |

### 14.2 Level Progression (Engineering Track Titles)

| Level | Title | XP Required |
|---|---|---|
| 1 | Freshman Coder | 0 |
| 2 | Syntax Slayer | 500 |
| 3 | Logic Builder | 1,500 |
| 4 | Data Wrangler | 3,000 |
| 5 | Algorithm Ace | 5,000 |
| 6 | System Thinker | 8,000 |
| 7 | Code Architect | 12,000 |
| 8 | GATE Gladiator | 18,000 |
| 9 | Interview Master | 25,000 |
| 10 | CS Sage | 35,000 |

### 14.3 Badges (Engineering Track)

| Badge | Criteria | Icon Concept |
|---|---|---|
| First Sort | Complete any sorting lesson | Ascending bars |
| Graph Explorer | Complete all graph lessons (DSA Level 4) | Connected nodes |
| SQL Ninja | Complete all SQL lessons | Database with katana |
| OS Commander | Complete all OS scheduling lessons | Gantt chart |
| Network Navigator | Complete all CN levels | Globe with packets |
| DP Master | Complete both DP lessons with perfect quiz scores | Table grid with star |
| GATE Ready | Complete a full GATE mock test | GATE logo with check |
| Pattern Pro | Complete all design pattern lessons | Puzzle pieces |
| SOLID Foundation | Complete all SOLID lessons | 5 pillars |
| Visualization Guru | Complete 50 visualization challenges | Eye with sparkle |
| Speed Demon | Complete a lesson in under 15 minutes | Lightning bolt |
| Streak Warrior | Maintain a 30-day streak | Fire with 30 |
| Subject Master (x5) | Complete all levels of a subject | Star with subject icon |
| Full Stack Scholar | Complete all 5 subjects | Graduation cap |

### 14.4 Daily Missions (Examples)

- Complete 2 lessons in any subject (+30 XP)
- Score 80%+ on 3 quizzes (+20 XP)
- Solve 5 practice problems (+25 XP)
- Spend 30 minutes in GATE Prep mode (+20 XP)
- Complete 1 visualization challenge (+15 XP)

### 14.5 Coins & Rewards

Coins are earned alongside XP and can be spent on:
- **Custom themes:** change the platform's color palette
- **Profile frames:** decorative frames for the user's profile avatar
- **Power-ups:** hint tokens for practice problems, extra time for mock tests
- **Cosmetic customizations:** (no pay-to-win mechanics)

---

## 15. Pricing

### 15.1 Tiered Pricing

| Plan | Price | Billing | Includes |
|---|---|---|---|
| **Free Tier** | ₹0 | Forever | First 3 lessons per subject, basic quizzes, community access |
| **Engineering Premium** | ₹249/month | Monthly via Dodo Payments | Full Engineering track + GATE mocks + placement prep + certificates |
| **Engineering Annual** | ₹149/month | ₹1,788/year | Same — 40% savings |
| **Engineering Lifetime** | ₹2,999 | One-time | Lifetime access to full Engineering track |
| **School Premium** | ₹449/month | Monthly | Full School track (see PRD.md) |
| **All Access Bundle** | ₹549/month | Monthly | Both tracks combined |

**2-day free trial** on all paid plans (no credit card required).

### 15.2 Free Tier Details

To drive conversion, the free tier provides:
- **First 3 lessons of every subject** (15 lessons total across DSA, CN, OS, DBMS, OOP) — fully unlocked
- **Basic quizzes** after free lessons
- **Community forum access**
- **Leaderboard** (view-only, can't participate until premium)
- All visualizations in free lessons are fully interactive (no degraded experience)

What's locked behind premium:
- Remaining lessons + visualizations (lesson 4 onwards)
- Full GATE mock tests + previous year papers
- Placement prep (company-specific paths)
- Certificates (downloadable PDF)
- Browser extension (Leetcode hints)
- Video explanations
- Progress sharing on LinkedIn/Instagram

### 15.3 Payment Infrastructure

- **Payment processor:** Dodo Payments (same as School Track)
- **Currencies:** INR (primary), USD, EUR (auto-converted)
- **Payment methods:** UPI, credit/debit card, net banking, wallets (India); international cards
- **Subscription management:** cancel anytime, no lock-in, access until period end

### 15.4 B2B / Institutional Pricing

| Plan | Price | Includes |
|---|---|---|
| **College Bulk** | ₹100/student/month (min 100 students) | Full Engineering track + teacher dashboard + analytics |
| **Institution-wide** | ₹50,000-₹3,00,000/year | All students + faculty + admin + custom branding |
| **Coaching Institute** | Custom pricing | White-label option + custom question banks |

### 15.5 Promotional Pricing

| Promotion | Details |
|---|---|
| **Launch offer** | First 1000 users: lifetime Engineering access at ₹999 (67% off) |
| **Referral** | Give ₹100 credit, get ₹100 credit per referral who subscribes |
| **Campus Ambassador** | Free premium + ₹50/referral for verified college ambassadors |
| **Seasonal sales** | Diwali, New Year, exam season (May/June) — 30-50% off annual plans |

---

## 16. Technical Architecture Notes

### 16.1 Integration with Existing Next.js App

The Engineering Track is built within the same Next.js 15 application, sharing:

- **Layout system:** The `(lessons)` route group and `LessonShell` component are extended to support Engineering Track content
- **Gamification engine:** `src/utils/gamification.ts` — same XP/coin/streak store, extended with Engineering-specific badges
- **Spaced repetition:** `src/utils/reviewDeck.ts` — Leitner system reused for Engineering Track flashcards
- **Component library:** Shared components (QuizCard, PredictionGate, Sidebar, etc.) are reused

### 16.2 Route Structure

```
src/app/(lessons)/
  engineering/
    dsa/
      level1/
        what-is-an-algorithm/page.tsx
        time-complexity/page.tsx
        space-complexity/page.tsx
        arrays-fundamentals/page.tsx
        strings-operations/page.tsx
        two-pointer-sliding-window/page.tsx
      level2/
        singly-linked-list/page.tsx
        ...
      ...level8/
    cn/
      level1/
        ...
      ...level7/
    os/
      level1/
        ...
      ...level7/
    dbms/
      level1/
        ...
      ...level7/
    oop/
      level1/
        ...
      ...level6/
    gate-prep/
      topic-test/[topic]/page.tsx
      mock-test/page.tsx
      pyq/[year]/page.tsx
    placement-prep/
      [company]/page.tsx
      mock-interview/page.tsx
    exam-prep/
      [subject]/page.tsx
```

### 16.3 New Component Architecture

| Directory | Contents |
|---|---|
| `src/lessons/engineering/dsa/` | DSA lesson activity components (42 files) |
| `src/lessons/engineering/cn/` | CN lesson activity components (34 files) |
| `src/lessons/engineering/os/` | OS lesson activity components (35 files) |
| `src/lessons/engineering/dbms/` | DBMS lesson activity components (35 files) |
| `src/lessons/engineering/oop/` | OOP lesson activity components (30 files) |
| `src/components/viz/` | Shared visualization components (ArrayVisualizer, TreeVisualizer, GraphVisualizer, etc.) |
| `src/components/engineering/` | Engineering-specific UI components (SubjectCard, GATETestRunner, MockInterviewPanel, etc.) |
| `src/data/engineering/` | Static data: lesson extras, GATE PYQs, placement question banks, exam question banks |

### 16.4 Visualization Library Architecture

```
src/components/viz/
  ArrayVisualizer.tsx        — bar chart with swap/compare animations
  TreeVisualizer.tsx          — hierarchical tree layout (Reingold-Tilford)
  GraphVisualizer.tsx         — force-directed / layered graph with traversal
  TableVisualizer.tsx         — animated matrix/grid for DP, page tables, etc.
  SequenceDiagram.tsx         — two-party message timeline
  GanttChart.tsx              — horizontal timeline with colored blocks
  PseudocodePanel.tsx         — syntax-highlighted code with line stepping
  SpeedController.tsx         — play/pause/step/speed controls
  MemoryVisualizer.tsx        — stack/heap split view
  UMLDiagram.tsx              — drag-and-drop class diagram builder
  NetworkCanvas.tsx           — network topology builder (reused from School Track)
  SubnettingCalculator.tsx    — IP/mask → network/broadcast/host calculator
  DiskVisualizer.tsx          — disk track head movement animation
  HashTableVisualizer.tsx     — bucket array with collision resolution
  StateTransitionDiagram.tsx  — finite state machine with token movement
```

### 16.5 State Management

Engineering Track state follows the existing pattern:

| localStorage Key | Purpose |
|---|---|
| `rpl-eng-progress-v1` | Completed lessons, tabs, and levels per subject |
| `rpl-eng-gate-scores-v1` | GATE mock test and topic test scores and analytics |
| `rpl-eng-practice-v1` | Practice problem attempts and scores |
| `rpl-eng-review-deck-v1` | Leitner spaced repetition card states for Engineering |
| `rpl-gamification-v1` | Shared with School Track (existing key) |

### 16.6 Design System

The Engineering Track uses the **clean, modern UI** design system — NOT the sketchy notebook aesthetic of the School Track (which is being phased out for the School Track as well).

| Element | Specification |
|---|---|
| **Typography** | Inter (body), JetBrains Mono (code/pseudocode) — no handwriting fonts |
| **Color palette** | Professional blues, grays, and accent colors per subject (DSA = blue, CN = green, OS = purple, DBMS = orange, OOP = teal) |
| **Components** | Clean cards, subtle shadows, rounded corners (8px), smooth transitions |
| **Layout** | Wide content area, collapsible sidebar, responsive (desktop-first, mobile-adaptive) |
| **Dark mode** | Supported from launch (CSS custom properties, same as existing platform) |
| **Visualization theming** | Consistent node/edge/bar colors across all visualizations, accessible contrast ratios |

### 16.7 Subject Color System

Each subject has a dedicated color palette used consistently across the platform:

| Subject | Primary Color | Light Variant | Dark Variant | Usage |
|---|---|---|---|---|
| **DSA** | `#3B82F6` (Blue 500) | `#DBEAFE` (Blue 100) | `#1E40AF` (Blue 800) | Sidebar icons, lesson cards, visualization accents |
| **CN** | `#10B981` (Emerald 500) | `#D1FAE5` (Emerald 100) | `#065F46` (Emerald 800) | Same pattern |
| **OS** | `#8B5CF6` (Violet 500) | `#EDE9FE` (Violet 100) | `#5B21B6` (Violet 800) | Same pattern |
| **DBMS** | `#F59E0B` (Amber 500) | `#FEF3C7` (Amber 100) | `#B45309` (Amber 800) | Same pattern |
| **OOP** | `#14B8A6` (Teal 500) | `#CCFBF1` (Teal 100) | `#0F766E` (Teal 800) | Same pattern |

### 16.8 Engineering Track Navigation Architecture

**Sidebar Structure:**
```
Engineering Track
├── DSA
│   ├── Level 1: Foundations (6 lessons)
│   │   ├── ✅ What is an Algorithm?
│   │   ├── ✅ Time Complexity & Big-O
│   │   ├── ✅ Space Complexity
│   │   ├── 🔓 Arrays — Fundamentals      ← current
│   │   ├── 🔒 Strings — Operations
│   │   └── 🔒 Two Pointer & Sliding Window
│   ├── Level 2: Linear Data Structures (6 lessons)
│   │   └── 🔒 (locked — complete Level 1 first)
│   ├── Level 3: Trees (6 lessons)
│   ├── Level 4: Graphs (7 lessons)
│   ├── Level 5: Sorting & Searching (6 lessons)
│   ├── Level 6: Algorithm Design (6 lessons)
│   ├── Level 7: Advanced Topics (6 lessons)
│   └── Level 8: Problem-Solving Patterns (6 lessons)
├── CN
│   ├── Level 1: Foundations (5 lessons)
│   └── ... (7 levels)
├── OS
│   ├── Level 1: Foundations (5 lessons)
│   └── ... (7 levels)
├── DBMS
│   ├── Level 1: Foundations (5 lessons)
│   └── ... (7 levels)
├── OOP
│   ├── Level 1: Foundations (5 lessons)
│   └── ... (6 levels)
├── ── ── ── ── (divider)
├── GATE Prep
│   ├── Topic-Wise Tests
│   ├── Mock Tests
│   └── PYQ Bank
├── Placement Prep
│   ├── Company-Wise Prep
│   ├── Mock Interviews
│   └── Interview Tips
├── Exam Prep
│   ├── Semester-Wise
│   ├── Revision Notes
│   └── Formula Sheets
├── ── ── ── ── (divider)
├── Dashboard
├── Review (Flashcards)
├── Achievements
└── Leaderboard
```

**Subject Selector:** On the engineering landing page, a horizontal tab bar or card grid lets users choose between the 5 subjects. Within a subject, the existing accordion sidebar pattern (from School Track) shows levels and lessons.

**Cross-Subject Navigation:** At the bottom of each lesson, a "Related Topics" section links to relevant lessons in other subjects (e.g., DSA Hashing → DBMS Indexing).

### 16.9 URL Routing Design

All Engineering Track URLs follow this pattern:

```
/engineering                            → Engineering Track landing page
/engineering/dsa                        → DSA subject overview
/engineering/dsa/level1                 → Level 1 overview
/engineering/dsa/level1/arrays          → Arrays lesson
/engineering/cn/level3/subnetting       → Subnetting lesson
/engineering/os/level2/round-robin      → Round Robin lesson
/engineering/dbms/level2/sql-joins      → SQL Joins lesson
/engineering/oop/level4/observer        → Observer Pattern lesson
/engineering/gate-prep                  → GATE Prep hub
/engineering/gate-prep/mock/1           → Mock Test #1
/engineering/gate-prep/pyq/2024         → PYQ 2024
/engineering/gate-prep/topic/dsa-dp     → Topic test: DSA DP
/engineering/placement-prep             → Placement Prep hub
/engineering/placement-prep/amazon      → Amazon prep
/engineering/placement-prep/mock        → Mock interview
/engineering/exam-prep                  → Exam Prep hub
/engineering/exam-prep/dsa              → DSA exam prep
/engineering/review                     → Flashcard review (Engineering)
```

### 16.10 Data Model (localStorage Keys)

| Key | Schema | Size Estimate |
|---|---|---|
| `rpl-eng-progress-v1` | `{ [subjectId]: { [lessonSlug]: { tabs: boolean[], quiz: { score, total }, completedAt } } }` | ~50KB at full completion |
| `rpl-eng-gate-scores-v1` | `{ topicTests: [{ topic, score, total, date }], mocks: [{ id, score, total, breakdown, date }] }` | ~20KB per 50 tests |
| `rpl-eng-practice-v1` | `{ [problemId]: { attempts, bestScore, solved, hints, bookmarked } }` | ~100KB at 1000 problems |
| `rpl-eng-review-deck-v1` | `{ [cardId]: { box: 1-5, lastReview, nextReview, correct, incorrect } }` | ~50KB at 1200 cards |
| `rpl-eng-placement-v1` | `{ [company]: { questionsAttempted, mockScores, round } }` | ~10KB |
| `rpl-gamification-v1` | Existing shared key — extended with Engineering badges | Already defined |

---

## 17. Phase Plan

### Phase 1 — MVP (Weeks 1-8)

**Goal:** Launch with DSA + one supporting subject, Learn mode + Practice mode.

| Deliverable | Details | Est. Effort |
|---|---|---|
| **DSA Levels 1-4** (24 lessons) | Foundations, Linear DS, Trees, Graphs — with full visualizations | 4 weeks (1 dev + 1 content writer) |
| **DBMS Levels 1-3** (14 lessons) | Foundations, SQL, Normalization — with full visualizations | 2 weeks |
| **Engineering Sidebar & Navigation** | Subject selector, level accordion, lesson links (extending existing Sidebar) | 3 days |
| **Shared Visualization Components** | ArrayVisualizer, TreeVisualizer, GraphVisualizer, TableVisualizer, PseudocodePanel, SpeedController | 2 weeks |
| **Practice Mode (basic)** | 200 MCQs across DSA + DBMS | 1 week |
| **Gamification extension** | Engineering-specific badges, XP rules, level titles | 2 days |

**Phase 1 ships:** ~38 lessons, ~200 practice questions, 2 subjects

### Phase 2 — Core Completion (Weeks 9-16)

**Goal:** Complete all 5 subjects, add GATE Prep mode.

| Deliverable | Details | Est. Effort |
|---|---|---|
| **DSA Levels 5-7** (18 lessons) | Sorting, Algorithm Design, Advanced — with full visualizations | 3 weeks |
| **OS Levels 1-7** (35 lessons) | Complete OS curriculum — with full visualizations | 4 weeks |
| **CN Levels 1-7** (34 lessons) | Complete CN curriculum — with full visualizations | 4 weeks |
| **DBMS Levels 4-7** (21 lessons) | Transactions, Indexing, Query Processing, Advanced — with full visualizations | 3 weeks |
| **OOP Levels 1-6** (30 lessons) | Complete OOP curriculum — with full visualizations | 3 weeks |
| **GATE Prep Mode** | Topic-wise tests, 3 full mock tests, PYQ bank (2015-2025), analytics dashboard | 2 weeks |
| **Additional Visualization Components** | SequenceDiagram, GanttChart, MemoryVisualizer, UMLDiagram, DiskVisualizer, SubnettingCalculator | 2 weeks |
| **Practice Mode (full)** | 1,400 questions across all subjects | 2 weeks |

**Phase 2 ships:** All ~176 lessons, all 5 subjects, GATE Prep mode, 1,400+ questions

### Phase 3 — Placement & Exam Prep (Weeks 17-24)

**Goal:** Add Placement Prep and Exam Prep modes, polish analytics.

| Deliverable | Details | Est. Effort |
|---|---|---|
| **Placement Prep Mode** | Company-specific question banks (8 companies), mock interview simulator, topic frequency matrix | 3 weeks |
| **Exam Prep Mode** | University-aligned question banks, semester-wise organization, quick revision notes | 2 weeks |
| **GATE Prep Enhancement** | 10 additional full mock tests, detailed performance analytics, study planner | 2 weeks |
| **Spaced Repetition Extension** | 500+ flashcards across all subjects, integrated with Leitner system | 1 week |
| **Performance Analytics Dashboard** | Cross-subject radar chart, weak area detection, progress over time graphs | 2 weeks |
| **Payment Integration** | Dodo Payments subscription with free tier feature flags | 1 week (shared with School Track effort) |

**Phase 3 ships:** Placement Prep, Exam Prep, enhanced GATE Prep, analytics

### Phase 4 — Growth & Polish (Weeks 25-32)

**Goal:** Content quality improvements, community features, and platform-wide polish.

| Deliverable | Details | Est. Effort |
|---|---|---|
| **Community features** | Discussion forums per lesson, user-submitted solutions | 3 weeks |
| **Additional GATE subjects** | Engineering Mathematics, Digital Logic, Computer Organization modules | 6 weeks |
| **AI-powered features** | Riku (AI companion) extended for Engineering — explain visualizations, hint on practice problems | 3 weeks |
| **Accessibility audit** | Screen reader compatibility, keyboard navigation for all visualizations, high-contrast mode | 2 weeks |
| **Mobile optimization** | Touch-friendly visualizations, responsive layouts, offline caching (PWA) | 3 weeks |
| **Localization research** | Assess demand for Hindi-medium Engineering content | 1 week (research only) |

### Phase 4 Detailed: Growth & Polish (Weeks 25-32)

| Deliverable | Details | Est. Effort |
|---|---|---|
| **Community features** | Discussion forums per lesson, user-submitted solutions, upvoting, moderation tools | 3 weeks |
| **Additional GATE subjects** | Engineering Mathematics module (13-15 marks), Digital Logic module (3-5 marks), Computer Organization module (5-8 marks) | 6 weeks |
| **AI-powered features** | Riku (AI companion) extended for Engineering — explain visualizations, hint on practice problems, adaptive difficulty selection | 3 weeks |
| **Accessibility audit** | Screen reader compatibility, keyboard navigation for all visualizations, high-contrast mode, WCAG 2.1 AA compliance | 2 weeks |
| **Mobile optimization** | Touch-friendly visualizations (pinch-to-zoom on trees/graphs, swipe-through steps), responsive layouts, offline caching (PWA) | 3 weeks |
| **Localization research** | Assess demand for Hindi-medium Engineering content | 1 week (research only) |

### Phase 5: Scale & Partnerships (Weeks 33-48)

| Deliverable | Details | Est. Effort |
|---|---|---|
| **College partnerships** | Dashboard for college administrators to track student progress, bulk enrollment, custom branding | 4 weeks |
| **Instructor tools** | Assignment creation from question bank, class-level analytics, custom test builder | 4 weeks |
| **Coding judge (optional)** | Pseudocode execution engine for automated testing of student solutions | 6 weeks |
| **Content expansion** | Additional 500 practice problems, 10 more GATE mock tests, 5 more company question banks | 4 weeks |
| **Real-time collaboration** | Live study rooms where students can interact with the same visualization simultaneously | 6 weeks |
| **API and integrations** | LMS integration (Google Classroom, Moodle), analytics export, SSO for colleges | 3 weeks |

### Phase Timeline Summary

```
          Weeks 1-8          Weeks 9-16         Weeks 17-24        Weeks 25-32        Weeks 33-48
          Phase 1            Phase 2             Phase 3            Phase 4            Phase 5
          ─────────          ─────────           ─────────          ─────────          ─────────
Content:  DSA L1-4           DSA L5-8            Placement bank     Additional GATE    +500 problems
          DBMS L1-3          OS full             Exam bank          subjects           +10 mock tests
                             CN full             GATE enhancement   Math/DL/CO         +5 companies
                             DBMS L4-7
                             OOP full

Features: Learn mode         GATE Prep mode      Placement Prep     Community          College dashboard
          Practice (basic)   Practice (full)     Exam Prep          AI (Riku v2)       Instructor tools
          Gamification       Viz components       Analytics          Accessibility      Coding judge
          Navigation         Flashcards           Payment            Mobile PWA         Collaboration

Viz:      Array, Tree,       Seq. Diagram,        Polish all         Touch-friendly     Real-time collab
          Graph, Table       Gantt, Memory,       existing viz       Accessible viz     viz
          Pseudocode         UML, Disk,                              High contrast
          SpeedControl       Subnet, Hash,
                             StateMachine

Lessons:  ~38                ~180 (cumulative)    ~180               ~180 + Math/DL/CO  ~180 + extras
Questions:~200               ~1,400               ~2,800             ~3,500             ~4,000
```

### Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Content quality inconsistency** across 180 lessons | High | High | Standardized lesson template, peer review process, style guide |
| **Visualization performance** on low-end devices (common in India) | Medium | High | Canvas fallback for complex scenes, progressive enhancement, performance budgets |
| **GATE syllabus changes** | Low | Medium | Annual syllabus review cycle, modular content that can be reordered |
| **Question bank exhaustion** (students run out of problems) | Medium | Medium | Community-contributed problems (Phase 5), AI-generated variations (Phase 5) |
| **Scope creep** on visualization specs | High | Medium | Minimum Viable Visualization (MVV) defined per lesson — ship MVV first, enhance later |
| **Single-developer bottleneck** | High | High | Component-based architecture allows parallel development; shared viz library reduces per-lesson effort |
| **Student dropout after free tier** | Medium | Medium | Generous free tier (Level 1 of each subject), engagement hooks (streaks, badges), pricing lower than competitors |

### Success Metrics

| Metric | Phase 1 Target | Phase 3 Target | Phase 5 Target |
|---|---|---|---|
| **Registered users** | 1,000 | 10,000 | 50,000 |
| **Monthly active users (MAU)** | 300 | 3,000 | 15,000 |
| **Paid subscribers** | 50 | 500 | 3,000 |
| **Lesson completion rate** | 40% (of started lessons) | 50% | 60% |
| **Average session time** | 15 minutes | 25 minutes | 30 minutes |
| **GATE mock test completions** | N/A | 500/month | 5,000/month |
| **Practice problems solved** | 2,000/month | 20,000/month | 100,000/month |
| **NPS score** | 40+ | 50+ | 60+ |
| **Monthly revenue** | ₹12,450 | ₹1,24,500 | ₹7,47,000 |

---

## Appendix A: Glossary of Abbreviations

| Abbreviation | Full Form |
|---|---|
| DSA | Data Structures and Algorithms |
| CN | Computer Networks |
| OS | Operating Systems |
| DBMS | Database Management Systems |
| OOP | Object-Oriented Programming |
| GATE | Graduate Aptitude Test in Engineering |
| PYQ | Previous Year Questions |
| MCQ | Multiple Choice Question |
| MSQ | Multiple Select Question |
| NAT | Numerical Answer Type |
| BST | Binary Search Tree |
| AVL | Adelson-Velsky and Landis (self-balancing BST) |
| BFS | Breadth-First Search |
| DFS | Depth-First Search |
| MST | Minimum Spanning Tree |
| DP | Dynamic Programming |
| LRU | Least Recently Used |
| FIFO | First In First Out |
| TCP | Transmission Control Protocol |
| UDP | User Datagram Protocol |
| IP | Internet Protocol |
| DNS | Domain Name System |
| HTTP | HyperText Transfer Protocol |
| TLS | Transport Layer Security |
| SSL | Secure Sockets Layer |
| OSI | Open Systems Interconnection |
| MAC | Medium Access Control |
| ARP | Address Resolution Protocol |
| NAT | Network Address Translation |
| CIDR | Classless Inter-Domain Routing |
| VLSM | Variable Length Subnet Masking |
| ACID | Atomicity, Consistency, Isolation, Durability |
| 2PL | Two-Phase Locking |
| FD | Functional Dependency |
| BCNF | Boyce-Codd Normal Form |
| ER | Entity-Relationship |
| UML | Unified Modeling Language |
| MVC | Model-View-Controller |
| SOLID | Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion |
| CAP | Consistency, Availability, Partition Tolerance |
| SDN | Software-Defined Networking |
| CDN | Content Delivery Network |
| VPC | Virtual Private Cloud |
| RAID | Redundant Array of Independent Disks |
| DMA | Direct Memory Access |
| TLB | Translation Lookaside Buffer |
| PCB | Process Control Block |
| IPC | Inter-Process Communication |
| RMS | Rate Monotonic Scheduling |
| EDF | Earliest Deadline First |
| RTOS | Real-Time Operating System |

---

## Appendix B: References

1. GATE CS 2025 Syllabus — IIT Roorkee (Organizing Institute)
2. Cormen, Leiserson, Rivest, Stein — *Introduction to Algorithms* (CLRS), 4th Edition
3. Tanenbaum, Wetherall — *Computer Networks*, 6th Edition
4. Silberschatz, Galvin, Gagne — *Operating System Concepts*, 10th Edition
5. Navathe, Elmasri — *Fundamentals of Database Systems*, 7th Edition
6. Gamma, Helm, Johnson, Vlissides — *Design Patterns: Elements of Reusable Object-Oriented Software*
7. Robert C. Martin — *Clean Architecture* and *Agile Software Development: Principles, Patterns, and Practices*
8. GATE Overflow — Previous year question analysis and topic-wise statistics
9. GeeksforGeeks — Interview experience archives for company-specific preparation
10. LeetCode, InterviewBit — Problem frequency and company-tagging data
